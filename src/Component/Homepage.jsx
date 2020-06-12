import React from 'react'
import { Col, Row, Image } from 'react-bootstrap'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Eminem: [],
            Metallica: [],
            Madonna: []
        };
    }

    componentDidMount() {
        Promise.all([
            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
                }
            })
                .then((response) => response.json())
                .then((responseObject) =>
                    this.setState({ eminem: responseObject.Search })
                ),

            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
                }
            })
                .then((response) => response.json())
                .then((responseObject) =>
                    this.setState({ metallica: responseObject.Search })
                ),

            fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=madonna", {
                method: 'GET',
                headers: {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "4013e328ffmsh3feb54311ce7296p1c3cc4jsnd3ad09e0821d",
                }
            })
                .then((response) => response.json())
                .then((responseObject) =>
                    this.setState({ madonna: responseObject.Search })
                ),
        ])

    }


    render() {

        return (
            <h1>{this.state.artist}</h1>

        )
    }

}


export default Homepage