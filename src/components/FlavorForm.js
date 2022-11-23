import React from 'react';
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'orange'};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favourite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Welcome to Flavor Selection Form</h1>
        </div>
        <label>
          Pick your favourite Flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mango">Mango</option>
            <option value="lime">Lime</option>
            <option value="apple">Apple</option>
            <option value="orange">Orange</option>
            <option value="strawberry">Straw Berry</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;
