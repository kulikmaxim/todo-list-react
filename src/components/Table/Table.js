import React, { Component } from 'react';

import TableItem from './TableItem';
import TableHeader from './TableHeader';

import './Table.css';

const columns = ['id', 'done', 'title', 'importance', 'date'];

class Table extends Component {
    render() {
        return (
            <table>
                <TableHeader columns={columns} />
                {this.props.items.map((item) => (
                    <TableItem
                        key={item.id}
                        {...item}
                        importanceNames={this.props.importanceNames}
                    />)
                )}
            </table>
        )
    }
}

export default Table;