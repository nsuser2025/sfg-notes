document.getElementById("pdfBtn").addEventListener("click", () => {
  const note = document.getElementById("note");
  html2canvas(note).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save("SFG_note.pdf");
  });
});
