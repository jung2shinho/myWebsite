import React from 'react';

const PDFViewer = () => {
  const path = process.env.PUBLIC_URL + "/myResume.pdf"

  return (
   <div className="pdf-container">
   <iframe
     title="PDF Viewer"
     src={path}
     width="100%"
     height="500px"
   ></iframe>
   </div>
  );
};

export default PDFViewer;