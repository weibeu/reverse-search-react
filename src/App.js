import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { Component } from 'react';
import MovieReverseSearch from './components/search/MovieReverseSearch';


const SEARCH_COMPONENTS = {
    movieReverse: MovieReverseSearch,
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: new String(),
            displayResults: false,
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
    }

    handleQueryChange(event) {
        this.setState({searchQuery: event.target.value});
        event.preventDefault();
    }

    handleQuerySubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div id="wrapper">
                    {this.state.displayResults ? <Main /> : <Header searchQuery={this.state.searchQuery} handleQueryChange={this.handleQueryChange} handleQuerySubmit={this.handleQuerySubmit} />}
                    <Footer />
                </div>
            </div>
        );
    }
}
