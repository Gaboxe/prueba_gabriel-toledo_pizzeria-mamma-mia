import { useParams } from "react-router-dom";
import { Button, ListGroup, Card, Row, Col } from "react-bootstrap";




export default function Pizzas() {

    const {idPizzaToWatch} = useParams('');

    console.log(idPizzaToWatch)

    return (
        <div className="mt-5">
            <Card className="m-3" style={{ width: '18rem' }} key=''>
                <Card.Img variant="top" src='' />
                <Card.Body>
                    <Card.Title>pizza.name</Card.Title>
                    <h5>Ingredientes:</h5>
                    {/* <ListGroup>
                        {
                            (pizza.ingredients).map((ingre, i) => {
                                return (
                                    <ListGroup.Item key={i}>{ingre}</ListGroup.Item>
                                )
                            })
                        }

                    </ListGroup> */}
                    <br />
                    <h5>$pizza.price</h5>

                    <Button variant="danger">Añadir</Button>
                </Card.Body>
            </Card>
        </div>
    );
}