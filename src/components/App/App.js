import React, { Component } from 'react';
import Table from '../Table';
import Form from '../Form';
import Filter from '../Filter';
import { getItems } from '../../utils/apiWrapper';

const importanceNames = ['High', 'Medium', 'Low'];

class App extends Component {
    state = {
        items: [],
        filter: {}
    }

    constructor() {
        super();
        getItems().then((items) => this.setState({ items }));
    }

    addTask(item) {
        this.setState({
            items: [
                item,
                ...this.state.items
            ]
        });
    }

    toggleChecked = (id) => {
        this.setState({
            items: this.state.items.map((item) => (item.id !== id) ? item : {
                ...item,
                done: !item.done
            }),
        })
    }

    handleFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        return (
            <div>
                <Form onAdd={this.addTask.bind(this)} importanceNames={importanceNames}  />
                <br />
                <Filter onFilter={this.handleFilter.bind(this)} />
                <br />
                <Table 
                    items={this.state.items} 
                    toggleChecked={this.toggleChecked} 
                    importanceNames={importanceNames} 
                    filter={this.state.filter}
                />
            </div>
        );
    }
}

export default App;