import React, { Component } from 'react'
import { searchMovieFromSubtitles } from '../../api';

export default class MovieReverseSearch extends Component {

    constructor(props) {
        super(props);
        this.searchQuery = this.props.searchQuery;
        this.state = {
            isLoading: false,
            searchData: {}
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});
        searchMovieFromSubtitles(this.searchQuery).then(response => {
            this.setState({searchData: response.data, isLoading: false});
        })
    }

    render() {
        let searchData = this.state.searchData;
        if (this.state.isLoading) {
            return (<h2 className="major">Fetching the results from the backend ...</h2>)
        }
        if (Object.keys(searchData).length === 0) {
            return (<h2 className="major">No results found :(</h2>)
        }
        let movieDetails = searchData.movie_details;
        let subtitleMeta = searchData.subtitle_meta;
        return (
            <>
                <h2 className="major">{movieDetails.originaltitle}</h2>
                <span className="image main"><img src={movieDetails.poster} alt={movieDetails.originaltitle} /></span>
                <h2><span className="icon fa-comment-dots" /> The Dialogues</h2>
                <blockquote><h4 style={{marginBottom: 0}}>{this.searchQuery}</h4></blockquote>
                <p style={{textAlign: "center"}}>
                    {subtitleMeta.map(item => item["is_key_phrase"] ? <><b>{item["dialogue"]}</b><br /></> : <>{item["dialogue"]}<br /></>)}
                </p>
                <h2><span className="icon fa-chart-bar" /> Movie Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Director</th>
                            <th>Genres</th>
                            <th>Writer</th>
                            <th>Release date</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>{movieDetails.directors[0].primaryname}</b></td>
                            <td><b>{movieDetails.genres}</b></td>
                            <td><b>{movieDetails.writers[0].primaryname}</b></td>
                            <td><b>{movieDetails.startyear}</b></td>
                            <td><b>{movieDetails.averagerating}</b></td>
                        </tr>
                    </tbody>
                </table>
                <h2><span className="icon fa-user" /> Cast Details</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            {/* <th>Birth Year</th> */}
                            <th>Professions</th>
                            <th>Role</th>
                            <th>Character</th>
                            <th>Appeared In</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movieDetails.cast.map(item => {
                            return (
                                <tr>
                                    <td>{item["primaryname"]}</td>
                                    {/* <td>{item["birthyear"]}</td> */}
                                    <td>{item["primaryprofession"]}</td>
                                    <td>{item["category"]}</td>
                                    <td>{item["characters"]}</td>
                                    <td>{"".concat(item["knownfortitles"])}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}
