import React, { Component } from 'react'



export class Output extends Component {
    render() {
        return (
            <div>
             <input type="text" value={this.props.result} placeholder="Please Calculator here"/>
            </div>
        )
    }
}

export default Output
