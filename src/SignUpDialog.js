import React, { Component } from 'react'

function FancyBorder(props) {
  return (
    <div className={props.color}>
      { props.children }
    </div>
  )
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{ props.title }</h1>
      <h1 className="Dialog-message">{ props.message }</h1>
      { props.children }
    </FancyBorder>
  )
}

export class SignUpDialog extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {
       login: ''
    }
  }
  handleChange (e) {
    this.setState({ login: e.target.value });
  }
  handleSignUp () {
    alert(`Welcome ${this.state.login}`)
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration"
        message="should we refer you?"
      >
        <input value={ this.state.login } onChange={ this.handleChange } />
        <button onClick={ this.handleSignUp }>Sign Me Up</button>
      </Dialog>
    )
  }
}

export default SignUpDialog
