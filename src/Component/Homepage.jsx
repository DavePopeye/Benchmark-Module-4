import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'
import Albums from './Albums';


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
            // Eminem: [],
            // Metallica: [],
            // Madonna: []
        };
    }

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
            }
        }

        const loadArtist = (artist) => {
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + artist, options)
                .then((response) => response.json())
                .then((responseObject) =>
                    this.setState({ playlists: this.state.playlists.concat([responseObject.data.slice(0, 4)]) })
                )
        }

        Promise.all([
            loadArtist("Eminem"),
            loadArtist("Metallica"),
            loadArtist("Madonna"),
            loadArtist("behemoth")
        ])

    }


    render() {

        return (
            <>
                <h1>{this.state.artist}</h1>
                {this.state.playlists.map(playlist => playlist.map(song => <Albums music={song} />))}
                {/* {this.state.Eminem.map(song => <Albums music={song} />)}
                {this.state.Metallica.map(song => <Albums music={song} />)}
                {this.state.Madonna.map(song => <Albums music={song} />)} */}
            </>
        )
    }

}


export default Homepage