import { useState } from "react"
import Sneaker from "./Sneaker"
import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
    return (
        <>
        <h1 className='display-3 text-center my-5'>
            <span className='brandColor fw-normal'>SNKRS</span> Store
        </h1>

        <Sneaker />
        
        </>
    );
};

export default ItemListContainer;
