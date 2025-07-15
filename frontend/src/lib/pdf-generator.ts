import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DetectionResult } from '@/types';

export const generatePDFReport = async (
  image: HTMLImageElement,
  results: DetectionResult[],
  language: string = 'en'
): Promise<void> => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // Add title
  pdf.setFontSize(20);
  pdf.text(language === 'en' ? 'Apple Leaf Disease Detection Report' : 'सेब के पत्ते की बीमारी रिपोर्ट', 20, 30);

  // Add date
  pdf.setFontSize(12);
  pdf.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);

  // Add image
  const canvas = await html2canvas(image);
  const imgData = canvas.toDataURL('image/jpeg', 0.8);
  const imgWidth = 80;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
  pdf.addImage(imgData, 'JPEG', 20, 60, imgWidth, imgHeight);

  // Add results
  let yPosition = 60 + imgHeight + 20;
  
  results.forEach((result, index) => {
    pdf.setFontSize(14);
    pdf.text(`${language === 'en' ? 'Detection' : 'पहचान'} ${index + 1}: ${result.disease}`, 20, yPosition);
    
    pdf.setFontSize(10);
    pdf.text(`${language === 'en' ? 'Confidence' : 'विश्वास'}: ${(result.confidence * 100).toFixed(1)}%`, 20, yPosition + 15);
    pdf.text(`${language === 'en' ? 'Severity' : 'गंभीरता'}: ${result.severity}`, 20, yPosition + 25);
    
    yPosition += 40;
    
    if (yPosition > pageHeight - 50) {
      pdf.addPage();
      yPosition = 30;
    }
  });

  // Save PDF
  pdf.save(`apple-leaf-disease-report-${Date.now()}.pdf`);
};