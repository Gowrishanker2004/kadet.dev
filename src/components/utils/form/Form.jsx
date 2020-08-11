import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {


  state = {
    name: '',
    email: '',
    message: ''
  }

  onChange (e) {
    this.setState( { [e.target.name]: e.target.value } )
  }

  submit (e) {
    e.preventDefault();

    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <div className="form_section">
            <label>
              <span>Your Name*</span>
              <input type="text" name="name" placeholder='Enter your name' value={this.state.name} onChange={this.onChange.bind(this)} />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Email*</span>
              <input type="text" name="email" placeholder='Enter your email' value={this.state.email} onChange={this.onChange.bind(this)}/>
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Message*</span>
              <textarea name="message" rows="10" value={this.state.message} onChange={this.onChange.bind(this)}></textarea>
            </label>
          </div>

          <div className="form_section">
            <button type='submit' >Send Message</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
