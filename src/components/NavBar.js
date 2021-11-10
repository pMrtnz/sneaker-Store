import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.svg';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="img-fluid mainLogo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse fs-4" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                        <a className="nav-link active px-5" aria-current="page" href="#">Home</a>
                        <a className="nav-link px-5" href="#">Shop</a>
                        <a className="nav-link px-5" href="#">About</a>
                        <div className='d-flex'>
                            <CartWidget/>
                            <span className='cartQty fw-bold text-center me-4'>1</span>
                        </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
  );
}

export default NavBar;