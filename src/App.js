import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import React, { Component } from 'react';
import MovieReverseSearch from './components/search/MovieReverseSearch';


const SEARCH_COMPONENTS = {
    movieReverse: <MovieReverseSearch />,
}


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            searchComponent: null,
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleQuerySubmit = this.handleQuerySubmit.bind(this);
        this.closeSearchComponent = this.closeSearchComponent.bind(this);
    }

    closeSearchComponent() {
        this.setState({searchComponent: null});
    }

    handleQueryChange(event) {
        this.setState({searchQuery: event.target.value});
        event.preventDefault();
    }

    handleQuerySubmit(event) {
        if (!this.state.searchQuery) {
            return
        }
        this.setState({searchComponent: SEARCH_COMPONENTS[event.target.attributes.searchtype.value]})
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div id="wrapper">
                    {this.state.searchComponent
                        ? <Main
                            searchComponent={this.state.searchComponent}
                            closeSearchComponent={this.closeSearchComponent}
                        /> : <Header
                            searchQuery={this.state.searchQuery}
                            handleQueryChange={this.handleQueryChange}
                            handleQuerySubmit={this.handleQuerySubmit} 
                        />}
                    <Footer />
                </div>
            </div>
        );
    }
}
