import React from 'react';

const PDFViewer = () => {
  return (
   <div className="pdf-container">
   <iframe
     title="PDF Viewer"
     src="/myResume.pdf"
     width="100%"
     height="500px"
   ></iframe>
   </div>
  );
};

export default PDFViewer;