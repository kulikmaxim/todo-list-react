import React, { Component } from 'react';

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
                <input ref="title" placeholder="Title" />
                <textarea ref="description" placeholder="Description" />
                <select ref="importance">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button>Add</button>
            </form>
        );
    }
}

export default Form;