import React, { useState } from 'react';
import '../stylesheets/Clearbutton.css'
const ClearButton = (props) => (




    <button className="clear-button"
      onClick={ props.handleClear }
    >
        {props.children}
    </button>
);


export default ClearButton;