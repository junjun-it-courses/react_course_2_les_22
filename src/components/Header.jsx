import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const pages = [
    {
        id: 1,
        route: '/',
        title: 'Home page'
    },
    {
        id: 2,
        route: 'single-todo',
        title: 'Single Todo'
    },
    {
        id: 3,
        route: 'all-todos',
        title: ' All todos'
    },
]


const Header = () => {
    const navigate = useNavigate();

    const handleNavigate = route => () => {
        navigate(route);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Todo List</Navbar.Brand>
                <Nav className="me-auto">
                    {pages.map(
                        page => (
                            <Nav.Link
                                key={page.id}
                                onClick={handleNavigate(page.route)}>
                                {page.title}
                            </Nav.Link>
                        )
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}


export default Header;