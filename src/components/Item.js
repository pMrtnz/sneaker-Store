import ItemCount from "./ItemCount";

const Item = ({ name, price, stock, sizes, pictureUrl}) => {
    return (
        <>
            <div class="card mx-auto">
                <div class="card-body text-center">
                    <h5 class="card-title display-6">{name}</h5>
                    <img src={pictureUrl} className='img-fluid'></img>
                </div>
                <ul class="list-group list-group-flush text-center">
                    <li class="list-group-item fw-bold">$ {price}</li>
                    <li class="list-group-item fw-bold">{sizes}</li>
                    <li class="list-group-item fw-bold">{stock} units.</li>
                </ul>
            </div>

            <ItemCount stock={10} initial={1}/>
        </>
    );
};


export default Item;