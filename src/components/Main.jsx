import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            <div id="main">
                <article id="search-results">
                    {this.props.searchComponent}
                    <div onClick={this.props.closeSearchComponent} className="close">Close</div>
                </article>
            </div>
        )
    }
}
