import React from 'react';
import '../stylesheets/Clearbutton.css'
const ClearButton = (props) => (
    <button className="clear-button">
        {props.children}
    </button>
);


export default ClearButton;