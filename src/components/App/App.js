import React, { Component } from 'react';
import Table from '../Table';
import Form from '../Form';
import Filter from '../Filter';
import storage from '../../utils/localStorage';

const IMPORTANCE_NAMES = ['High', 'Medium', 'Low'];
const STORAGE_NAME = 'data'; 

class App extends Component {
    state = {
        items: [],
        filter: {}
    }

    constructor() {
        super();
        storage.getData(STORAGE_NAME)
            .then((state) => state && this.setState(state));
    }

    addTask(item) {
        this.setState({
            items: [
                item,
                ...this.state.items
            ]
        }, () => storage.setData(STORAGE_NAME, this.state));
    }

    toggleChecked = (id) => {
        this.setState({
            items: this.state.items.map((item) => (item.id !== id) ? item : {
                ...item,
                done: !item.done
            }),
        }, () => storage.setData(STORAGE_NAME, this.state))
    }

    handleFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        return (
            <div>
                <Form onAdd={this.addTask.bind(this)} importanceNames={IMPORTANCE_NAMES}  />
                <br />
                <Filter onFilter={this.handleFilter.bind(this)} />
                <br />
                <Table 
                    items={this.state.items} 
                    toggleChecked={this.toggleChecked} 
                    importanceNames={IMPORTANCE_NAMES} 
                    filter={this.state.filter}
                />
            </div>
        );
    }
}

export default App;