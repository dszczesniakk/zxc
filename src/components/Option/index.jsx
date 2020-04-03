import React from 'react';

const Option = ({text, checked, onChange}) => {
  return (
    <div className="option">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <p>{text}</p>
    </div>
  )
}

export default Option;