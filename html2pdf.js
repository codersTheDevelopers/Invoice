function save() {
  console.log("save button called");
  const element = document.querySelector(".page-body");
  var opt = {
    margin: [-0, -2.2],
    filename: `Form.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      dpi: 192,
      scale: 4,
      letterRendering: true,
      useCORS: true,
      scrollY: 0,
    },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
  //html2pdf().from(element).save();
}
