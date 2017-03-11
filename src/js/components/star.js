import React from 'react';
import ReactDOM from 'react-dom';

let Star = (props)=> {
  let className = "glyphicon glyphicon-star";
  if (props.empty !== undefined && props.empty) {
    className = "glyphicon glyphicon-star-empty";
  }
  return (
    <span className={className} aria-hidden="true"></span>
  )
}

export default Star;
