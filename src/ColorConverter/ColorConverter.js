import React, { Component } from "react";
import "./ColorConverter.css";

class ColorConverter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      props: this.props.data,
      R: '',
      G: '',
      B: '',
      Hex: ''
    };
    this.setRValue = this.setRValue.bind(this);
    this.setGValue = this.setGValue.bind(this);
    this.setBValue = this.setBValue.bind(this);
    this.setHexValue = this.setHexValue.bind(this);
    this.convertRgbToHex = this.convertRgbToHex.bind(this);
    this.convertHexToRgb = this.convertHexToRgb.bind(this);
  }

  render() {
    return (
      <div className="ColorConverter container" style={{borderColor: `rgb(${this.state.R}, ${this.state.G}, ${this.state.B})`}}>
        <div className="row">
          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text">R</span>
            </div>
            <input type="text" className="form-control" placeholder="Red" aria-label="Username" aria-describedby="basic-addon1" value={this.state.R} onChange={this.setRValue}/>
          </div>
          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text">G</span>
            </div>
            <input type="text" className="form-control" placeholder="Green" aria-label="Username" aria-describedby="basic-addon1" value={this.state.G} onChange={this.setGValue}/>
          </div>
          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text">B</span>
            </div>
            <input type="text" className="form-control" placeholder="Blue" aria-label="Username" aria-describedby="basic-addon1" value={this.state.B} onChange={this.setBValue}/>
          </div>
          <div className="col-auto">
            <div><span>&raquo;</span></div>
          </div>
          <div className="input-group col">
            <div className="input-group-prepend">
              <span className="input-group-text">Hex</span>
            </div>
            <input type="text" className="form-control" placeholder="Hex" aria-label="Username" aria-describedby="basic-addon1" value={this.state.Hex} onChange={this.setHexValue}/>
          </div>
        </div>
      </div>
    )
  }

  setRValue(e){
    this.setState({R: e.target.value});
    this.convertRgbToHex(e.target.value, this.state.G, this.state.B);
  }
  setGValue(e){
    this.setState({G: e.target.value});
    this.convertRgbToHex(this.state.R, e.target.value, this.state.B);
  }
  setBValue(e){
    this.setState({B: e.target.value});
    this.convertRgbToHex(this.state.R, this.state.G, e.target.value);
  }
  setHexValue(e){
    console.log("hex value change:", e.target.value);
    this.setState({Hex: e.target.value});
    console.log("setHexValue", this.state);
    this.convertHexToRgb(e.target.value);
  }

  convertRgbToHex(R, G, B){
    const Hex = ColorConverter.rgbToHex(R) + ColorConverter.rgbToHex(G) + ColorConverter.rgbToHex(B);
    this.setState({Hex});
  }
  convertHexToRgb(hex){
    if(hex){
      hex = hex.replace('#', '');
      const R = parseInt(hex.substring(0,2), 16) || 0;
      const G = parseInt(hex.substring(2,4), 16) || 0;
      const B = parseInt(hex.substring(4,6), 16) || 0;
      this.setState({R,G,B});
    }
  }
  static rgbToHex(rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
         hex = "0" + hex;
    }
    return hex;
  };
}
export default ColorConverter
