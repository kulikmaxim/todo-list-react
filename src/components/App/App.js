import React, { Component } from 'react';
import Table from '../Table';
import Form from '../Form';
import { getItems } from '../../utils/apiWrapper';

const importanceNames = ['High', 'Medium', 'Low'];

class App extends Component {
    state = {
        items: []
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

    render() {
        return (
            <div>
                <Form onAdd={this.addTask.bind(this)} importanceNames={importanceNames} />
                <Table items={this.state.items } importanceNames={importanceNames} />
            </div>
        );
    }
}

export default App;