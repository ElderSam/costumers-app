import React from 'react';

const SelectOptions = (props) => {
    return (
      <>
        <option value=""></option>

        {props.options.map(({value, text}, index) => {
          return  (<option key={index} value={value}>{text}</option>)
        })}
      </>
    )
}

export default SelectOptions;