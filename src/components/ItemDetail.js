import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <>
        {
            item && item.image
            ?
            <div className="item-detail">
                <img src={item.image} alt={item.name}/>
            <div className="item-detail-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
                <ItemCount stock={10} initial={1} />
            </div>
            :
            <>  
            <div className='d-flex align-items-center justify-content-center spinnerLoad'>
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only"></span>
                </div>           
            </div>
                <p className='d-flex align-items-center justify-content-center my-5 fw-bold fs-5'>Loading, please wait...</p>
            </>
        }
        </>
    );
};

export default ItemDetail;