import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";

function CatItem(item) {

    const handleClick = (event) => {
        event.preventDefault();
        alert(item.name + " : " + item.description);
    }

    return (
        <>
            <Card.Body style={{ background: "#F6E7D8" }}>
                <hr />
                <Card.Title className="title">{item.name}</Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left", color: "#534340" }}>Origin : {item.origin}</Card.Text>
                <a onClick={handleClick} class="btn" style={{backgroundColor: "#F68989"}}>Info</a>
            </Card.Body>
        </>
    )
}

export default CatItem;