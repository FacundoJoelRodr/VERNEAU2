  import React from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import productosJson from '../productos/productos.json';
  import { NavLink, Link} from 'react-router-dom';
  import imageLogo from '../assets/logo.png';
  import CartWidget from '../components/CartWidget';

  const categories = productosJson.map(producto => producto.tipo)

  const unique = new Set(categories);

  export const NavBar = () => {
    return (
        <Navbar variant="light" className='navbar-prin'>
          <Container>
            <Navbar.Brand>
            <Link to="/" className='logo'><img src={imageLogo} alt="" className='logoImg'/>VERNEAU</Link>
            </Navbar.Brand>
            <Nav className="md-auto nav-items">
              {[...unique].map(item=> (
                <NavLink key={item} className="nav-link" to={`/category/${item}`} >
                  {item}
                </NavLink>
              ))}
              <Link to="/carrito" className='carrito'>              
              <CartWidget/>
              </Link>
            </Nav>
                
          </Container>
        </Navbar>
    );
  }

  export default NavBar;