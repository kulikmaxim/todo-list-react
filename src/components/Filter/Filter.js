import React, { Component } from 'react';
//import {getDateByString} from '../../utils/getDateByString';

import './Filter.css';

class Filter extends Component {

    handleSubmit(ev) {
        ev.preventDefault();
        let filter = {
            showComplited: this.refs.showComplited.value,
            searchText: this.refs.searchText.value,
            dateFrom: this.refs.dateFrom.value,
            dateTo: this.refs.dateTo.value,
        }

        this.props.onFilter(filter);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
                    <legend>Filter</legend>
                    <input ref='showComplited' type='checkbox' /><label>Show complited</label>
                    <input ref='dateFrom' placeholder='dd.mm.yyyy' /><label>Date from</label>
                    <input ref='dateTo' placeholder='dd.mm.yyyy' /><label>Date to</label>
                    <input ref='searchText' placeholder='Text search (title + description)' />
                    <button>filter</button>
            </fieldset>
        </form>
        );
    }
}

export default Filter;