import React from 'react';
class EasyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Learning React Forms'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
        this.setState({value: event.target.value})
  }

  handleSubmit(event){
    alert('A comment had been submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Welcome to React Easy form</h1>
        </div>
        <label>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <input type="submit" value='Submit' />
      </form>
    );
  }
}

export default EasyForm;
