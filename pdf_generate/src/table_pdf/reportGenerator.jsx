import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = (values) => {
  const doc = new jsPDF();

  const date = new Date();
  const times =
    new Date().toLocaleString() +
    "--" +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  const tableColumn = ["userId", "id", "title"];
  const tableRows = [];

  console.log(values.length);
  console.log(values);

  values.forEach(function (value) {
    const tablerow = [value?.userId, value?.id, value?.title];

    tableRows.push(tablerow);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.save(`report_${times}.pdf`);
};

export default generatePDF;
