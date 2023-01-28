import React from 'react'
import "../css/Popup.css";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="popup">
         props.content
      </div>
    </div>
  )
}

export default Popup