import React from 'react';

const Option = ({text, checked, onChange}) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label>{text}</label>
    </div>
  )
}

export default Option;