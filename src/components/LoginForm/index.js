import {Component} from 'react'
import cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    history.push('/')
    cookies.set('jwtToken', jwtToken, {expires: 30})
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    return (
      <div>
        <p>{errorMsg}</p>
      </div>
    )
  }

  submitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login/'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (data.jwt_token !== undefined) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserField = () => {
    const {username} = this.state
    return (
      <>
        <label className="" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input"
          placeholder="username"
          value={username}
          onChange={this.onchangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          className="username-input"
          value={password}
          onChange={this.onchangePassword}
        />
      </>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://i.postimg.cc/zDgYHJ2B/Flipkart-Image.jpg"
            alt="logo"
          />
          <br />
          <h1 className="flipkart">flipkart</h1>
        </div>
        <div className="form-container">
          <form onSubmit={this.submitForm} className="submit-form">
            <div>{this.renderUserField()}</div>

            <div> {this.renderPasswordField()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
            <div>{this.onSubmitFailure()}</div>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginForm
