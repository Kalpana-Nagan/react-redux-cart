import React from 'react'

export const Item = props => {
    return (
       <input key={props.id} onChange={props.handleCheckElement} type="checkbox"
          checked={props.isChecked} value={props.id} />
    )
}

export default Item;