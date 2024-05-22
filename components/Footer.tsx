// import jsPDF from "jspdf";

export const Footer = () => (
  <footer>
    {/* <button onClick={() => {
      const doc = new jsPDF('p', 'pt', 'a4');
      const mainElement = document.querySelector('main');

      if (mainElement) {
        doc.html(mainElement, {
          callback: function (doc) {
            doc.save();
          },
          autoPaging: 'text',
          margin: [20, 0, 20, 0],
        });
      }

    }}>Gen PDF</button> */}
  </footer>
);
