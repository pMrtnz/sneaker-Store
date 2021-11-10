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
        <div className='text-center mt-3'>
            <div className='qtyCard'>
                <button type="button" className="btn btn-primary mx-5" onClick= {decrement} >-</button>
                <p className='mx-5 fw-bold'>{cantidad}</p>
                <button type="button" className="btn btn-primary mx-5" onClick= {increment} >+</button>
            </div>
            <div className='my-3'>
                <button type="button" className="btn btn-primary btnAdd" onClick= {addToCart}>Add To Cart</button>
            </div>
        </div>
    );
};


export default  ItemCount;