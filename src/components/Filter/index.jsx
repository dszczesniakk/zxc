import React from 'react';
import Option from '../Option';

const Filter = ({checkedOptions, onChangeOptions}) => {

  const onChange = param => {
    checkedOptions.includes(param)
      ? onChangeOptions(checkedOptions.filter(row => row !== param))
      : onChangeOptions([...checkedOptions, param]);
  }

  return (
    <div className="filter">
      <h3>Data sources</h3>
      <Option
        text="Fashion"
        checked={checkedOptions.includes('fashion')}
        onChange={() => onChange('fashion')}
      />
      <Option
        text="Sports"
        checked={checkedOptions.includes('sports')}
        onChange={() => onChange('sports')}
      />
    </div>
  )
}

export default Filter;