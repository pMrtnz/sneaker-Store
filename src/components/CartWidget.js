import cartLogo from '../assets/img/cartLogo.png';

export default function CartWidget() {
    return (
        <>
            <div>
                <a className="nav-link py-0 mx-4" href="#">
                    <img src={cartLogo} alt="Cart" className="cartIcon"/>
                </a>
            </div>
        </>
    )
}