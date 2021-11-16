import { useEffect, useState } from "react"
import fetchCustom from "../utils/fetchCustom";
import ItemList from "./ItemList.jsx";
const { products } = require('../utils/products');

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCustom(2000, products)
        .then(result => setItems(result))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h1 className='display-3 text-center my-5'>
            <span className='brandColor fw-normal'>SNKRS</span> Store
        </h1>

        <ItemList items={items} />
        </>
    );
};

export default ItemListContainer;
