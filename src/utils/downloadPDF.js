
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const downloadPDF = async (elementId, fileName = "resume.pdf") => {
  const input = document.getElementById(elementId);
  const canvas = await html2canvas(input, { scale: 5 });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(fileName);
};

export default downloadPDF;
