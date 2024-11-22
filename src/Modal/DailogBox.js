import React from 'react';
import './dailog.css';

const DailogBox = ({open,close,header,body,footer}) => {
    if(!open) return null;
  return (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <div className="dialog-header">
          <h2>{header}</h2>
          <button className="close-button" onClick={close}>
            &times;
          </button>
        </div>
        <div className="dialog-body">
          <p>{body}</p>
        </div>
        <div className="dialog-footer">{footer}</div>
      </div>
    </div>
  );
}

export default DailogBox;