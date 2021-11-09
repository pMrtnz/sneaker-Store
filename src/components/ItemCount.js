import {useState} from 'react';

const ItemCount = (props) => {
    const [cantidad, setCantidad] = useState(1);

    const decrement = () => {
        if(cantidad > 1){
            setCantidad(cantidad-1);
        }
    }

    const increment = () => {
        if(cantidad < props.stock){
            setCantidad(cantidad+1);
        }
    } 

    const addToCart = () => {
        console.log(`Se agregaron ${cantidad} unidades al carrito`);
    }
    
    return(
        <div className='text-center'>
            <div >
                <button className='mx-4' onClick= {decrement} >-</button>
                {cantidad}
                <button className='mx-4' onClick= {increment} >+</button>
            </div>
            <div className='mt-4'>
                <button onClick= {addToCart}>Add To Cart</button>
            </div>
        </div>
    );
};


export default  ItemCount;