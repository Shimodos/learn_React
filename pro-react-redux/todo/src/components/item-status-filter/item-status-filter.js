import React from 'react';

const ItemStatusFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? 'btn-primary' : 'btn-outline-secondary';
        return (
          <button
            type="button"
            className={`btn ${clazz}`}
            key={name}
            onClick={() => onFilterChange(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ItemStatusFilter;

// Class components version:

// import React, { Component } from 'react';
//
// // import './item-status-filter.css';
//
// export default class ItemStatusFilter extends Component {
//   buttons = [
//     { name: 'all', label: 'All' },
//     { name: 'active', label: 'Active' },
//     { name: 'done', label: 'Done' },
//   ];
//
//   render() {
//     const { filter, onFilterChange } = this.props;
//
//     const buttons = this.buttons.map(({ name, label }) => {
//       const isActive = filter === name;
//       const clazz = isActive ? 'btn-primary' : 'btn-outline-secondary';
//       return (
//         <button
//           type="button"
//           className={`btn ${clazz}`}
//           key={name}
//           onClick={() => onFilterChange(name)}
//         >
//           {label}
//         </button>
//       );
//     });
//
//     return <div className="btn-group">{buttons}</div>;
//   }
// }
