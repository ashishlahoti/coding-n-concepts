import React, { Component } from "react";

class ColorConverter extends Component {
  render() {
    return (
      <div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">R</span>
          </div>
          <input type="text" className="form-control" placeholder="Red" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">G</span>
          </div>
          <input type="text" className="form-control" placeholder="Green" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">B</span>
          </div>
          <input type="text" className="form-control" placeholder="Blue" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
    )
  }
}
export default ColorConverter
