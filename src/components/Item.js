import ItemCount from "./ItemCount";


const Item = ({ brand, name, price, stock, sizes, pictureUrl}) => {
    return (
        <>
        <div className='container cards'>
            <div className="col-5 card">
                <div className="card-body text-center">
                    <h5 className="card-title fs-5 my-3 fw-light">{brand}</h5>
                    <h5 className="card-title fs-4 my-3">{name}</h5>
                    <img src={pictureUrl} className='img-fluid mb-5'></img>
                </div>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item"><span className='fw-bold'>Sizes:</span> {sizes}</li>
                    <li className="list-group-item">{stock} units.</li>
                    <li className="list-group-item fw-bold fs-5">$ {price}</li>
                </ul>
                <ItemCount stock={stock} initial={1}/>
            </div>
        </div>
        </>
    );
};


export default Item;