import { useState, useEffect } from "react";
import { Container, InputGroup, Card, Row, Col } from "react-bootstrap";
import CatItem from "./CatItem";

function CatList() {
    const [cats, catTemps] = useState([]);
    const [inputSearch, setInputSearch] = useState([]);
    const [input, setInput] = useState([""]);
    const handleChange = (event) => {
        setInput(event.target.value);
    };

    useEffect(async () => {
        const response = await fetch("https://api.thecatapi.com/v1/breeds")
        const result = await response.json()
        catTemps(result);
        setInputSearch(result);
    }, []);
   
    useEffect(() => {
        const filterInput = inputSearch.filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        catTemps(filterInput);
        console.log(filterInput);
    }, [input]);

    console.log(cats);

    return (
        <Container fluid="md">
            <InputGroup size="lg" className="mb-4 mt-4 justify-content-md-center">
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={handleChange}
                />
            </InputGroup>
            <Row xs={1} md={4} className="g-4">
                {cats.map((item) => (
                    <Col >
                        <Card
                            style={{ width: "100%", height: "100%" }}>
                            <Card.Img
                                variant="top"
                                src={item.image?.url}
                                alt="foto"
                                style={{ width: "100%", height: "200px" }}
                            />
                            <CatItem name={item.name} origin={item.origin} description={item.description} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CatList;