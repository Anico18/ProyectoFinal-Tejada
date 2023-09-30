import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import styles from './NavBarComponent.module.scss';

const NavBarComponent = () => {
    return (
            <Navbar expand="lg" className={styles.nav}>
                <Container>
                    <Navbar.Brand><Link style={{paddingRight: '1rem'}} to={"/"}>CollectiWorld</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link style={{paddingTop: '0.5rem', paddingRight: '1rem'}} to={"/"}>Home</Link>
                        <Link style={{paddingTop: '0.5rem', paddingRight: '1rem'}} to={"/create/products"}>Crear producto</Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={"/category/figuras"} >Figuras</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={"/category/modelkits"} >Model Kits</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={"/category/cartas"} >Cartas</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidgetComponent />
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}

export default NavBarComponent;