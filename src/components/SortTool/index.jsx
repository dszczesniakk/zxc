import React from 'react';

const SortTool = ({onChangeOrder, order}) => {
  return (
    <div className="sortTool">
      <p
        className="sorting-tag"
        onClick={() => onChangeOrder(order === 'asc' ? 'desc' : 'asc')}
      >
        Sort by date
      </p>
      <div className="sorting-triangle">
        <div
          className={order === 'desc' ? `arrow-up turnedOff` : 'arrow-up'}
          onClick={() => onChangeOrder('asc')}
        />
        <div
          className={order === 'asc' ? `arrow-down turnedOff` : 'arrow-down'}
          onClick={() => onChangeOrder('desc')}
        />
      </div>
    </div>
  )
}

export default SortTool;