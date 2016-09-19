import React, { Component } from 'react';

class MemberInfo extends Component {
	renderResponse() {
		if ( 'string' === typeof this.props.data ) {
			return (
				<p>
					{this.props.data}
				</p>
			)
		} else {
			return (
				<p>
					Hi {this.props.data.fname}, you are a dues paid {this.props.data.level} member of {this.props.data.chapter} through {this.props.data.year}
				</p>
			)
		}
	}

	resetForm() {
		window.location.reload();
	}
  render() {
    return (
		<div className="member-info">
			{ this.renderResponse() }
			<button onClick={this.resetForm.bind(this)}>Search again?</button>
			<a href="http://tahosalodge.doubleknot.com/event/tahosa-lodge-2016-2017-dues-deal/1970697" target="_blank" className="button">Pay your dues</a>
		</div>
    );
  }
}

export default MemberInfo;
