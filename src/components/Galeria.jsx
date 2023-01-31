
import { useContext } from "react";
import { MyContext } from "../Context";

import { Button, ListGroup, Card } from "react-bootstrap";

export default function Home() {

  const { listPizzas, statePizza, setStatePizza } = useContext(MyContext);


  const addToCart = (id, price) => {

    let a, b;
    console.log(statePizza)
    // let inP = (statePizza.shop_pizza).findIndex((p)=> p.id === id);
    // console.log(inP)

    console.log(filter(id))
    if (statePizza.length === 0 || !filter(id) === true) {
      console.log(filter(id))
      console.log('agregando pizza...')
      setStatePizza([...statePizza, { shop_pizza: { id: id, cant: 1 }, total: price }])
    } else if (filter(id) === true) {
      console.log(filter(id))
      console.log('aumenta en una...')
      statePizza.map((p) => {
        let { shop_pizza } = p
        if (shop_pizza.id === id) {
          shop_pizza.cant = shop_pizza.cant + 1
          p.total = price * shop_pizza.cant
        }
        // console.log(shop_pizza.id)
      })
    }
    // else{
    //   console.log(filter(id))
    //   console.log('esta es una nueva pizza, no existe otra')
    //   setStatePizza([...statePizza, { shop_pizza: { id: id, cant: 1 }, total: price }])
    // }
    // else {
    //   return setStatePizza([...statePizza, { shop_pizza: { id: id, cant: 1 }, total: price }])
    // }


    // console.log(statePizza)


  }
  console.log(statePizza)
  const filter = (idPizza) => {
    // console.log(Object.values(shop_pizza))
    // console.log(idPizza)
    // console.log(Object.values(shop_pizza).includes(idPizza))

    return statePizza.some(({ shop_pizza }) => Object.values(shop_pizza).includes(idPizza))

    // for (const { shop_pizza } of statePizza) {
    //   console.log(idPizza + ' ? ' + shop_pizza.id)


    //   if (shop_pizza.id === idPizza) {
    //     console.log('hay dos pizzas iguales')
    //     console.log(true)
    //     break
    //   } else {
    //     continue
    //   }
    // }
    // console.log(false)
    // return true
  }


  const verMas = () => {

  }

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
                      <br />
                      <h5>${pizza.price}</h5>
                      <Button variant="primary">Ver Mas</Button>
                      <Button variant="danger" onClick={() => addToCart(pizza.id, pizza.price)}>Añadir</Button>
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
