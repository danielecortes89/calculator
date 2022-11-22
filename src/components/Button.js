import React from 'react';

function Button(props) {

  const isOperator = val => {
    return isNaN(val) && (val !== '.') && (val !== '=')
  };

    return (
        <div 
        className = {`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}>
          {props.children}            
        </div>
    )
}

export default Button;