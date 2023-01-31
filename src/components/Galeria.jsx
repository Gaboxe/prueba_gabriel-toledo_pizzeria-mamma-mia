

import { useContext } from "react";
import { MyContext } from "../Context";

import { Button, ListGroup, Card } from "react-bootstrap";

export default function Home() {

  const { listPizzas } = useContext(MyContext);

  return (
    <>
      {
        listPizzas ?
          <div className="d-flex flex-wrap justify-content-center">

            {
              listPizzas.map((pizza) => {
                return (

                  <Card className="m-3" style={{ width: '18rem' }} key={pizza.id}>
                    <Card.Img variant="top" src={pizza.img} />
                    <Card.Body>
                      <Card.Title>{pizza.name}</Card.Title>
                      <h5>Ingredientes:</h5>
                      <ListGroup>
                        {
                          (pizza.ingredients).map((ingre, i) => {
                            return (
                              <ListGroup.Item key={i}>{ingre}</ListGroup.Item>
                            )
                          })
                        }

                      </ListGroup>
                      <br/>
                      <h5>${pizza.price}</h5>
                      <Button variant="primary">Ver Mas</Button>
                      <Button variant="danger">Añadir</Button>
                    </Card.Body>
                  </Card>

                )
              })
            }
          </div> : null
      }
    </>

  );
}
