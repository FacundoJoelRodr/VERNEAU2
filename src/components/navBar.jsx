  import React, { useState, useEffect } from 'react';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import { NavLink, Link} from 'react-router-dom';
  import imageLogo from '../assets/logo.png';
  import CartWidget from '../components/CartWidget';
  import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';



    const NavBar = () => {
      const [categories, setCategories] = useState([]);
     
      useEffect(() => {
        const fetchCategories = async () => {
          try {
            const db = getFirestore();
            const collectionRef = collection(db, 'ItemCollection');
            const q = query(collectionRef, where('tipo', '!=', ''));
            const snapshot = await getDocs(q);
    
            const uniqueCategories = new Set();
            snapshot.forEach((doc) => {
              uniqueCategories.add(doc.data().tipo);
            });
    
            setCategories([...uniqueCategories]);
          } catch (error) {
            console.error('Error al obtener las categorías:', error);
          }
        };
    
        fetchCategories();
      }, []);
    return (
        <Navbar variant="light" className='navbar-prin'>
          <Container>
            <Navbar.Brand>
            <Link to="/" className='logo'><img src={imageLogo} alt="" className='logoImg'/>VERNEAU</Link>
            </Navbar.Brand>
            <Nav className="md-auto nav-items">
            <NavLink to={`/`} className="nav-link">Todo</NavLink>
              {[...categories].map(item=> (
                <NavLink key={item} className="nav-link" to={`/category/${item}`} >
                  {item}
                </NavLink>
              ))}
              <Link to="/cart" className='carrito'>              
              <CartWidget/>
              </Link>
            </Nav>
                
          </Container>
        </Navbar>
    );
  }

  export default NavBar;