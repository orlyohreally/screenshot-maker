const html2canvas = require("html2canvas");
const jsPDF = require("jspdf");

html2canvas(document.getElementById("screenshot"), { scale: 1 }).then(
  (canvas) => {
    document.body.appendChild(canvas);
    var pdf = new jsPDF("p", "mm", "a4");
    var screenshot = canvas.toDataURL("image/png");
    pdf.addImage(screenshot, "PNG", 0, 0);
    pdf.save("screenshot.pdf");
    document.body.removeChild(canvas);

    var link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute("href", screenshot);
    link.setAttribute("download", "screenshot.png");
    link.click();
    document.body.removeChild(link);
  }
);
