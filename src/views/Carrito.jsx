import { Button, ListGroup, Card, Row, Col } from "react-bootstrap";


export default function Carrito() {

    return (
        <div className="mt-5">
            <Card className="m-3" style={{ width: '18rem' }} key=''>
            <Card.Img variant="top" src='' />
            <Card.Body>
                {/* <Card.Title>{pizza.name}</Card.Title> */}
                <h5>Ingredientes:</h5>

                <br />

                <h5>$---</h5>
                <br />
                <div>
                    <Button variant="primary">+</Button>
                    <h5>n°pizzas</h5>
                    <Button variant="danger">-</Button>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
}