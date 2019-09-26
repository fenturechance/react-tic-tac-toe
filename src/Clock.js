import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick() , 1000)
    }
    componentWillUnmount() {
        // If the Clock component is ever removed from the DOM,
        // React calls the componentWillUnmount() lifecycle method so the timer is stopped.
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is { this.state.date.toLocaleTimeString() }</h2>
            </div>
        )
    }
}

export default Clock
