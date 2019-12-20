import React, { Component } from "react";
import "./JsonFormatter.css";

class JsonFormatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props.data,
      rawJson: "",
      formattedJson: ""
    };
    this.onJsonChange = this.onJsonChange.bind(this);
    this.formatJson = this.formatJson.bind(this);
  }

  render() {
    return (
     <div className="JsonFormatter">
       <div className="row">
          <div className="col form-group">
            <label>Json Data</label>
            <textarea className="form-control" autoFocus rows="20" value={this.state.rawJson} onChange={this.onJsonChange}></textarea>
          </div>      
          <div className="col-1"></div>
          <div className="col form-group">
            <label>Formatted Json Data</label>
            <textarea className="form-control" rows="20" value={this.state.formattedJson} readOnly></textarea>
          </div>
        </div>
     </div> 

    )
  }

  onJsonChange(e){
    this.setState({rawJson: e.target.value});
    this.formatJson(e.target.value);
  }

  formatJson(rawJson){
    try{
      console.log(rawJson);
      const parsedJson = JSON.parse(rawJson);
      console.log(parsedJson);
      const formattedJson = JSON.stringify(parsedJson, null, "\t");
      this.setState({formattedJson});
    }catch(err){
      this.setState({formattedJson: ""});
      console.error("json parsing error", err);
    }
  }

}
export default JsonFormatter;
