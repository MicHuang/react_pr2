import React from 'react'
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
  state = {
    title: ''
  };

  onChange = (e) => this.setState({
    [e.target.name]: e.target.value
  });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''})
  }

  render() {
    return (<form onSubmit={this.onSubmit}>
      <input value={this.state.title} onChange={this.onChange} placeholder='Add new todo...' type='text' name='title'/>
      <button type='submit' value='Add'>Add</button>
    </form>)
  }
}

export default AddTodo;
