import React, { Component } from "react";
import MemberInfo from "./MemberInfo";

class Form extends Component {
  state = {
    fname: "",
    lname: "",
    zip: ""
  };

  changeFname = event => {
    this.setState({ fname: event.target.value });
  };

  changeLname = event => {
    this.setState({ lname: event.target.value });
  };

  changeZIP = event => {
    this.setState({ zip: event.target.value });
  };

  queryMembers = event => {
    event.preventDefault();
    const { fname, lname, zip } = this.state;
    const apiURL = `https://tahosalodge.org/wp-json/dues-api/v1/get-member?zip=${zip}&fname=${fname}&lname=${lname}`;
    fetch(apiURL)
      .then(response => {
        if (response.status !== 200) {
          console.log(
            `Looks like there was a problem. Status Code: ${response.status}`
          );
          return;
        }

        response.json().then(data => {
          this.setState({ response: data });
        });
      })
      .catch(err => {
        console.log("Fetch Error :-S", err);
      });
  };

  render() {
    const { response } = this.state;
    const { payDues } = this.props;
    return (
      <div className="form-wrapper">
        {response && <MemberInfo data={response} />}
        <form>
          <label htmlFor="fname">
            <span>First Name</span>
            <input type="text" name="fname" onChange={this.changeFname} />
          </label>
          <label htmlFor="lname">
            <span>Last Name</span>
            <input type="text" name="lname" onChange={this.changeLname} />
          </label>
          <label htmlFor="zip">
            <span>ZIP Code</span>
            <input
              type="number"
              name="zip"
              onChange={this.changeZIP}
              pattern="\d*"
            />
          </label>
          <button type="button" onClick={this.queryMembers}>
            Check my dues
          </button>
          {payDues && (
            <a
              href="http://tahosalodge.doubleknot.com/event/tahosa-lodge-2016-2017-dues-deal/1970697"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Pay my dues
            </a>
          )}
        </form>
      </div>
    );
  }
}

export default Form;
