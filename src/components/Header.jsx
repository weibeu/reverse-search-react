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
                        <SearchBar />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Movies Reverse Search</a></li>
                            <li><a href="#">Movies Forward Search</a></li>
                            <li><a href="#">Songs Reverse Search</a></li>
                            <li><a href="#">Songs Forward Search</a></li>
                        </ul>
                    </nav>
                </div>
                
            </header>
        )
    }
}
