import imgAJ1 from '../assets/img/AJ1-Mocha.png';
import imgYZY from '../assets/img/YZY350-Israfil.png';
import '../App.css'
import ItemCount from './ItemCount';

function Sneaker() {
    return(
        <>
        <div className='d-flex'>
            <div class="card mx-auto">
                <div class="card-body text-center">
                    <h5 class="card-title display-6">Air Jordan 1 High Dark Mocha</h5>
                    <img src={imgAJ1} alt='Air Jordan 1 Mocha' className='img-fluid'></img>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item fw-bold">Price: $550</li>
                    <li class="list-group-item fw-bold">Size: 8 / 9.5 / 10 US</li>
                </ul>
                
                <ItemCount stock={10} initial={1} />
            </div>

            <div class="card mx-auto">
                <div class="card-body text-center">
                    <h5 class="card-title display-6">Yeezy Boost 350 V2 Israfil</h5>
                    <img src={imgYZY} alt='Air Jordan 1 Mocha' className='img-fluid'></img>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item fw-bold">Price: $300</li>
                    <li class="list-group-item fw-bold">Size: 8 / 9.5 / 11 US</li>
                </ul>
                
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
        </>
    )
}

export default Sneaker;