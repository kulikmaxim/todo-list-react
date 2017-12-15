import React from 'react';

function TableItem(props) {
    return (
    <tr>
        <td><input type="checkbox" checked={props.done} onChange={() => props.toggleChecked(props.id)}/></td>
        <td title={props.description}>{props.title}</td>
        <td>{props.importanceNames[props.importance]}</td>
        <td>{`${props.date.getDate()}.${props.date.getMonth() + 1}.${props.date.getFullYear()}`}</td>
    </tr>
    );
}

export default TableItem;