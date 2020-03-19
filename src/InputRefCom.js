import React, { Component } from 'react'

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  )
}

export class InputRefCom extends Component {
  constructor(props) {
    super(props)
    this.inputElement = React.createRef()
    this.setFocus = this.setFocus.bind(this)
  }
  setFocus () {
    this.inputElement.current.focus()
  }
  render() {
    return (
      <div>
        <CustomTextInput inputRef={this.inputElement}></CustomTextInput>
        <button onClick={ this.setFocus }>click to focus</button>
      </div>
    )
  }
}

export default InputRefCom
