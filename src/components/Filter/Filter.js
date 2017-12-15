import React, { Component } from 'react';
import {getDateByString} from '../../utils/getDateByString';
import debounce from 'lodash/debounce';

import './Filter.css';

class Filter extends Component {
    constructor() {
        super();
        
        this.debouncedHandleFormChanges = debounce(this.handleFormChanges, 100);
    }

    handleFormChanges(ev) {
        ev.preventDefault();
        let filter = {
            showComplited: this.refs.showComplited.checked,
            searchText: this.refs.searchText.value,
            dateFrom: getDateByString(this.refs.dateFrom.value),
            dateTo: getDateByString(this.refs.dateTo.value),
        }

        this.props.onFilter(filter);
    }

    render() {
        return (
        <form onChange={this.debouncedHandleFormChanges.bind(this)}>
            <fieldset>
                    <legend>Filter</legend>
                    <input ref='showComplited' type='checkbox' /><label>Show complited</label>
                    <input ref='dateFrom' placeholder='dd.mm.yyyy' /><label>Date from</label>
                    <input ref='dateTo' placeholder='dd.mm.yyyy' /><label>Date to</label>
                    <input ref='searchText' placeholder='Text search (title + description)' />
            </fieldset>
        </form>
        );
    }
}

export default Filter;