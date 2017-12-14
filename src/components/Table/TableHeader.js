import React from 'react';

function TableHeader(props) {
    return (
        <thead>
            <tr>
                {props.columns.map((col) => (<th>{col}</th>))}
            </tr>
            <tr>
                {props.columns.map(name => (
                    <th>
                        <button onClick={() => props.onSort(name)}>^</button><br />
                        <button onClick={() => props.onSort(`-${name}`)}>v</button>
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader;