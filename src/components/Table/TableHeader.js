import React from 'react';

function TableHeader(props) {
    return (
        <thead>
            <tr>
                {props.columns.map((col) => (<th>{col}</th>))}
            </tr>
        </thead>
    )
}

export default TableHeader;