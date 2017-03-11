import React from 'react';
import ReactDOM from 'react-dom';

let Form = (props)=> {
  return (
    <form id="hotelForm">
      <div className="form-group">
        <label htmlFor="hotelName">Hotel Name:</label>
        <input type="text" id="hotelName" name="hotelName" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="stars">Stars:</label>
        <input type="number" min="0" max="5" id="stars" name="stars" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" className="form-control" />
      </div>
      <input onClick={()=> {props.method();}} type="button" className="btn btn-primary" value="Submit" />
    </form>
  )
}

export default Form;
