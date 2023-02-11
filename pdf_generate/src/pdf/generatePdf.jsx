import jsPDF from "jspdf";
import "../App.css";

function GeneratePdf() {
  const makepdf = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, "This is Default Text");

    doc.setFont("courier");
    // doc.setFontType(undefined, "normal");

    doc.text(20, 50, "This is Text with courier font");

    doc.save("generated.pdf");
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => makepdf()}>Increment</button>
      </div>
    </div>
  );
}

export default GeneratePdf;
