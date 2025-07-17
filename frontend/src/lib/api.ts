import { DetectionResult } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"; // ✅ match FastAPI port

export async function detectDisease(file: File): Promise<DetectionResult[]> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch(`${API_BASE_URL}/predict/`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || `HTTP error! status: ${response.status}`);
    }

    if (!Array.isArray(data)) {
      throw new Error("Invalid response format from server");
    }

    return data.map((result: any) => {
      if (
        !result.disease ||
        !result.confidence ||
        !result.severity ||
        !result.coordinates ||
        !result.treatment
      ) {
        throw new Error("Missing required fields in detection result");
      }

      return {
        disease: result.disease,
        confidence: result.confidence,
        severity: result.severity,
        coordinates: result.coordinates,
        imageUrl: result.imageUrl || "", // ✅ NEW
        reportUrl: result.reportUrl || "", // ✅ NEW
        treatment: {
          title: result.treatment.title || "",
          description: result.treatment.description || "",
          steps: Array.isArray(result.treatment.steps)
            ? result.treatment.steps
            : [],
          audioUrl: result.treatment.audioUrl || "",
        },
      };
    });
  } catch (error) {
    console.error("Error detecting disease:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to process image"
    );
  }
}
