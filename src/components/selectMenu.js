import React from 'react'

export default (props) => {
    const options = props.lista.map( (option, index) => {
        return (
            <option value={index}>{option.label}</option>
        )
    });

    return(
        <select {...props}>
            {options}
        </select>
    );
}