import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <form searchtype="movieReverse" onSubmit={this.props.handleQuerySubmit}>
                <input
                    value={this.props.searchQuery}
                    onChange={this.props.handleQueryChange}
                    style={{width: "80%", margin: "auto", borderColor: "yellow"}}
                    type="text" name="search-query" id="search-query" placeholder="Enter your search term here."
                />
            </form>
        )
    }
}
