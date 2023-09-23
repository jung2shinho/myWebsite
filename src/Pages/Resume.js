import React from "react";
import PDFViewer from "../Components/Resume";
import "../css/Pages.css";

export default function Resume() {
    return (
      <div className="pages">
        <h1>Resume / Curriculum Vitae</h1>
        <PDFViewer />
      </div>
    )
}