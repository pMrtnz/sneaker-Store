import { useEffect, useState } from "react";
import fetchCustom from "../utils/fetchCustom";
import ItemDetail from "./ItemDetail";
const { products } = require('../utils/products');

const ItemDetailContainer = () => {
    const [items, setItems] = useState({});

    useEffect(() => {
        fetchCustom(2000, products)
        .then(result => setItems(result))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <ItemDetail item={items} />
    );
}

export default ItemDetailContainer;