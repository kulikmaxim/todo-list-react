import React, { Component } from 'react';
import Table from '../Table';
import Form from '../Form';
import { getItems } from '../../utils/apiWrapper';

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
                <Form onAdd={this.addTask.bind(this)} />
                <Table items={this.state.items} />
            </div>
        );
    }
}

export default App;