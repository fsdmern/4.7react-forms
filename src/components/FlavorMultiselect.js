import React from 'react';
import Select from 'react-select'

class FlavorMultiselect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: 'orange'};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    )};

  handleSubmit(event) {
    alert('Your favourite flavor is: ' + this.state.selectedOption.label);
    event.preventDefault();
  }

  
  render() {
    let choices = [
      {value: 'mango', label: 'Mango'},
      {value: 'lime', label: 'Lime'},
      {value: 'apple', label: 'Apple'},
      {value: 'orange', label: 'Orange'},
      {value: 'strawberry', label: 'Straw Berry'},
    ];

    const {selectedOption} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>Welcome to Flavor Selection Form - Multi Select</h1>
        </div>
        <label>
          Pick your favourite Flavor:
          <Select
            value={selectedOption}
            options={choices}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorMultiselect;
