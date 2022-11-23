import React from "react";
import './nameform.css'
class NameForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        this.setState({value: event.target.value})
    }
    handleSubmit(event){
        alert('A name was submitted: '+ this.state.value)
        event.preventDefault()
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1>Welcome to React forms</h1>
            </div>
            <div>
              <label>
                Name:
                <input type="text" onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <input type="submit" value="Submit" />
            </div>
          </form>
        );
    }

}

export default NameForm