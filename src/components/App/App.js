import React, { Component } from 'react';
import Table from '../Table';
import { getItems } from '../../utils/apiWrapper';

class App extends Component {
    state = {
        items: []
    }

    constructor() {
        super();
        getItems().then((items) => this.setState({ items }));
    }

    render() {
        return (
            <div>
                <Table items={this.state.items} />
            </div>
        );
    }
}

export default App;