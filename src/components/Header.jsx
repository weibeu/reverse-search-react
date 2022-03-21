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
                                ["Movies Reverse Search", "movieReverse"],
                                ["Movies Forward Search", "movieForward"],
                                ["Songs Reverse Search", "songReverse"],
                                ["Songs Forward Search", "songForward"],
                            ].map((item, index) => <li key={index}><a searchtype={item[1]} onClick={this.props.handleQuerySubmit} href="#">{item[0]}</a></li>)}
                        </ul>
                    </nav>
                </div>
                
            </header>
        )
    }
}
