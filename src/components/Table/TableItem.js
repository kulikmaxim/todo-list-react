import React from 'react';

function TableItem(props) {
    return (
    <tr>
        <td>{props.id}</td>
        <td><input type="checkbox" checked={props.done} onChange={() => props.toggleChecked(props.id)}/></td>
        <td title={props.description}>{props.title}</td>
        <td>{props.importanceNames[props.importance]}</td>
        <td>{props.date.getDay()}</td>
    </tr>
    );
}

export default TableItem;