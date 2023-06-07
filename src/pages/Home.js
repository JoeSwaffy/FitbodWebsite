import { Nav, Navbar, Container } from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">FitBod</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Home
