import React from "react";
import { Col, Image } from "react-bootstrap";



class Albums extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { music } = this.props;
        return (
            <Col className="mb-2">
                <Image
                    fluid
                    src={music.album.cover_medium}
                    alt={music.title}
                />
            </Col>
        );
    }
}

export default Albums;