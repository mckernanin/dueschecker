import React, { Component } from "react";

class MemberInfo extends Component {
  renderResponse = () => {
    const { data } = this.props;
    if (typeof data === "string") {
      return <p>{data}</p>;
    }
    const { fname, level, chapter, year } = data;
    return (
      <p>
        {`Hi ${fname}, you are a dues paid ${level} member of ${chapter} through ${year}.`}
      </p>
    );
  };

  resetForm = () => {
    window.location.reload();
  };

  render() {
    const { data } = this.props;
    return (
      <div className="member-info">
        {this.renderResponse()}
        <button type="button" onClick={this.resetForm}>
          Search again?
        </button>
        <a
          href={process.env.REACT_APP_DUES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Pay your dues
        </a>
      </div>
    );
  }
}

export default MemberInfo;
