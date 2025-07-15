import { useState } from "react";
import { BASE_URL } from "../utils/api";

export default function Home() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => setImage(e.target.files[0]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);

    const res = await fetch(`${BASE_URL}/predict/`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Apple Leaf Disease Detection</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Detect</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <p><strong>Disease:</strong> {result.disease}</p>
          <p><strong>Treatment:</strong> {result.treatment}</p>
          <img src={result.image_url} alt="Annotated" width={300} />
          <p><a href={result.report_url} target="_blank">Download Report</a></p>
          <audio controls src={result.audio_url}></audio>
        </div>
      )}
    </div>
  );
}
