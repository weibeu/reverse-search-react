import React, { Component } from 'react'
import SearchBar from './SearchBar'

export default class Header extends Component {
    render() {
        return (
            <header id="header">
                <div className="logo">
                    <span className="fas fa-search" style={{fontSize: 35, verticalAlign: "middle"}}></span>
                </div>
                <div className="content" style={{paddingBottom: "3rem"}}>
                    <div className="inner">
                        <h1>Reverse Search</h1>
                        <p>Easily reverse search movies from their dialogues, songs from their lyrics and much more.</p>
                        <SearchBar searchQuery={this.props.searchQuery} handleQueryChange={this.props.handleQueryChange} />
                    </div>
                    <nav>
                        <ul>
                            {[
                                "Movies Reverse Search",
                                "Movies Forward Search",
                                "Songs Reverse Search",
                                "Songs Forward Search",
                            ].map((item, index) => <li key={index}><a onClick={this.props.handleQuerySubmit} href="#">{item}</a></li>)}
                        </ul>
                    </nav>
                </div>
                
            </header>
        )
    }
}
