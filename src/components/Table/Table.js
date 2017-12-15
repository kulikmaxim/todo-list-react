import React, { Component } from 'react';

import TableItem from './TableItem';
import TableHeader from './TableHeader';
import sortBy from '../../utils/sortBy';
import {filterBy} from '../../utils/filterBy';

import './Table.css';

const columns = ['id', 'done', 'title', 'importance', 'date'];

class Table extends Component {
    state = {
        sortBy: 'id',
    }

    handleSort = (sortBy) => {
        this.setState({sortBy});
    }

    render() {
        let filteredItems = filterBy(this.props.items, this.props.filter);

        let sortedItems = sortBy(
            filteredItems,
            this.state.sortBy
        );

        return (
            <table>
                <TableHeader columns={columns} onSort={this.handleSort.bind(this)} />
                {sortedItems.map((item) => (
                    <TableItem
                        key={item.id}
                        {...item}
                        toggleChecked={this.props.toggleChecked}
                        importanceNames={this.props.importanceNames}
                    />)
                )}
            </table>
        )
    }
}

export default Table;