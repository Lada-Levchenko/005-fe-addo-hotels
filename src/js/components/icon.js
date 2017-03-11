import React from 'react';
import ReactDOM from 'react-dom';

let Icon = (props)=> {
  let icon = <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>;
  if (props.icon !== undefined) {
    icon = props.icon;
  }
  return (
    <div onClick={()=> {props.method();}} className="pull-right text-danger" aria-label="Close">
      {icon}
    </div>
  )
}

export default Icon;
