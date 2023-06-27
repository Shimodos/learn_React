import React, { Component } from 'react';

import './todo-list-item.scss';

export default class TodoListItem extends Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <div>
          <span className="todo-list-item-label" onClick={onToggleDone}>
            {label}
          </span>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}
          >
            <i className="fa fa-trash"></i>
          </button>

          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}
          >
            <i className="fa fa-exclamation" />
          </button>
        </div>
      </span>
    );
  }
}

// const TodoListItem = ({ label, important = false }) => {
//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal',
//   };
//
//   return (
//     <span className="todo-list-item">
//       <div>
//         <span className="todo-list-item-label" style={style}>
//           {label}
//         </span>
//       </div>
//
//       <div>
//         <button type="button" className="btn btn-outline-success btn-sm float-right">
//           <i className="fa fa-exclamation" />
//         </button>
//
//         <button type="button" className="btn btn-outline-danger btn-sm float-right">
//           <i className="fa fa-trash"></i>
//         </button>
//       </div>
//     </span>
//   );
// };
