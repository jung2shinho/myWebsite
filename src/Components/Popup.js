import React from 'react'
import "../css/Popup.css";

const Popup = ({ content, onClose }) => {
  return (
    <div className="popup-box">
      <div className="popup">
        <span className="popup-close" onClick={onClose}>&times;</span>
        {content}
      </div>
    </div>
  )
}

export default Popup