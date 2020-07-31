import React from "react";
import { Image, Row } from "react-bootstrap";

class Albums extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { music } = this.props;
    return (
      <Row className="m-2  d-inline-flex">
        <Image fluid src={music.album.cover_medium} alt={music.title} />
      </Row>
    );
  }
}

export default Albums;
