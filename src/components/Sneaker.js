const Sneaker = ({img, name, price}) => {
    return(
        <>
        <div className='sneaker-container'>
            <div className='sneaker-img'>
                <img src={img} alt={name}/>
            </div>
            <div className='sneaker-info'>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
        </div>
        <div>
        </div>
        </>
    );
};

export default Sneaker;