import React, { Component } from 'react'

export class Reservation extends Component {
  constructor(props) {
    super(props)
    this.state = {
       isGoing: true,
       numberOfGuests: 2
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange (event) {
    const target = event.target
    const value = target.name === 'isGoing' ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Is going
            <input
              type="checkbox"
              name="isGoing"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests
            <input
              type="number"
              name="numberOfGuests"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
              />
          </label>
        </form>
        <div>{ this.state.isGoing ? 'Yes' : 'No' }</div>
        <div>{ this.state.numberOfGuests }</div>
      </div>
    )
  }
}

export default Reservation
