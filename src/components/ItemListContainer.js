import Sneaker from "./Sneaker"
import ItemCount from "./ItemCount"

export default function ItemListContainer() {
    return (
        <>
        <h1 className='display-3 text-center mt-5'>
            <span className='brandColor fw-normal'>SNKRS</span> Store
        </h1>

        <Sneaker />

        <ItemCount stock={10} initial={1} />
        </>
    )
}

