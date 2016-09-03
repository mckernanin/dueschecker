import React, { Component } from 'react';
import MemberInfo from './MemberInfo';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showInfo: false
		}
	}

	changeFname(event) {
		this.setState({fname: event.target.value});
	}

	changeLname(event) {
		this.setState({lname: event.target.value});
	}

	changeZIP(event) {
		this.setState({zip: event.target.value});
	}

	queryMembers(event) {
		event.preventDefault();
		let formComponent = this;
		let apiURL = 'https://tahosalodge.org/wp-json/dues-api/v1/get-member?zip=' + this.state.zip + '&fname=' + this.state.fname + '&lname=' + this.state.lname;
		fetch(apiURL)
		  .then(
		    function(response) {
		      if (response.status !== 200) {
		        console.log('Looks like there was a problem. Status Code: ' +
		          response.status);
		        return;
		      }

		      // Examine the text in the response
		      response.json().then(function(data) {
		        formComponent.setState({response: data});
		      });
		    }
		  )
		  .catch(function(err) {
		    console.log('Fetch Error :-S', err);
		  });
		  this.setState({showInfo: true});
	}

	render() {
		return (
			<div className="form-wrapper">
				{this.state.showInfo ?
					<MemberInfo data={this.state.response} /> :
					null
				}
				<form>
					<label>
						<span>First Name</span>
						<input type="text" name="fname" onChange={this.changeFname.bind(this)}/>
					</label>
					<label>
						<span>Last Name</span>
						<input type="text" name="lname" onChange={this.changeLname.bind(this)}/>
					</label>
					<label>
						<span>ZIP Code</span>
						<input type="number" name="zip" onChange={this.changeZIP.bind(this)} pattern="\d*"/>
					</label>
					<button onClick={this.queryMembers.bind(this)}>Check my dues</button>
				</form>
			</div>
		);
	}
}

export default Form;
