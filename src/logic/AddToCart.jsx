import { useContext } from "react";
import { MyContext } from "../Context";

export function useAddToCart () {
    const { listPizzas, statePizza, setStatePizza } = useContext(MyContext);

    const filter = (idPizza) => {

        return statePizza.some(({ shop_pizza }) => Object.values(shop_pizza).includes(idPizza))
    }

    function addToCart(id, price) {

        console.log(statePizza)
        console.log(filter(id))

        if (statePizza.length === 0 || !filter(id) === true) {
            // console.log(filter(id))
            console.log('agregando pizza...')

            setStatePizza([...statePizza, { shop_pizza: { id: id, cant: 1 }, total: price }])
        } else if (filter(id) === true) {
            // console.log(filter(id))
            console.log('aumenta en una...')

            statePizza.map((p) => {
                let { shop_pizza } = p
                if (shop_pizza.id === id) {
                    shop_pizza.cant = shop_pizza.cant + 1
                    p.total = price * shop_pizza.cant
                }
            })
        }
    }

    return {
        addToCart
    }
}
