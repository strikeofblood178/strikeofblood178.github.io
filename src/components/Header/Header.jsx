import cn from 'clsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Header.module.css';
import {SlSocialTwitter} from 'react-icons/sl';
import {SlSocialVkontakte} from 'react-icons/sl'

const Header = () => {
  return (
    <div id='Header' className={styles.container}>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#"><img src={`img/${"Dar"}.png`} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={cn(styles.margin,"me-auto", styles.gap)}>
            <Nav.Link className={cn(styles.link, "fs-4", "text-dark", "text-decoration-underline")} href="#Controls"> <p className={styles.hover}>Каталог</p></Nav.Link>
            <Nav.Link className={cn(styles.link, "fs-4", "text-dark", "text-decoration-underline")} href="#SliderTwo"><p className={styles.hover}>Акции</p></Nav.Link>
            <Nav.Link className={cn(styles.link, "fs-4", "text-dark", "text-decoration-underline")} href="#Footer"><p className={styles.hover}>Контакты</p></Nav.Link>

          </Nav>
          <div className={styles.gg}>
          <Nav className={styles.gap}>
            <Nav.Link className={styles.links} href="tel:+380441234567">+7 (999) 123-45-67</Nav.Link>
             <Nav.Link eventKey={2} target="_blank"  href="https://www.youtube.com/watch?v=AtR40o6bi3U" className={cn(styles.icon, "fs-4", "text-dark")}> 
             <SlSocialTwitter className={styles.icons} />
            </Nav.Link>
            <Nav.Link eventKey={2}  target="_blank"  href="https://github.com/strikeofblood178/react-ex" className={cn(styles.icon, "fs-4", "text-dark")}>
              <SlSocialVkontakte  className={styles.icons}/>
            </Nav.Link>
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header