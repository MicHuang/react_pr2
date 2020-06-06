import React from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed
        ? 'line-through'
        : 'none'
    }

  }

  render() {
    const {id, title, completed} = this.props.todo;
    return (<div style={this.getStyle()}>
      <p>
        <input type='checkbox' checked={completed} onChange={this.props.markComplete.bind(this, id)}></input>
        {title}
        <button style={{
            float: "right"
          }} onClick={this.props.deletItem.bind(this, id)}>x</button>
      </p>
    </div>)
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deletItem: PropTypes.func.isRequired
}

export default TodoItem;
