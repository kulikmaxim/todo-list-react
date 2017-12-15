import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    handleSubmit(ev) {
        ev.preventDefault();
        let item = {
            id: Date.now(),
            done: false,
            title: this.refs.title.value,
            description: this.refs.description.value,
            importance: this.refs.importance.value,
            date: new Date(),
        }

        if (this.refs.title.value) {
            this.props.onAdd(item);
            ev.target.reset();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <fieldset>
                        <legend>Form</legend>
                        <input ref="title" placeholder="Title" />
                        <select ref="importance">
                            {this.props.importanceNames.map((name, index) => <option value={index}>{name}</option>)}
                        </select>
                        <textarea ref="description" placeholder="Description" />
                        <button>Add</button>
                </fieldset>
            </form>
        );
    }
}

export default Form;