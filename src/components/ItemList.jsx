import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
        <div>
            {
                items.length > 0 
                ? items.map(item => <Item key={item.id} brand={item.brand} name={item.name} price={item.price} sizes={item.sizes} pictureUrl={item.image[0]} stock={item.stock} />)
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
        </div>
        </>
    );
};

export default ItemList;