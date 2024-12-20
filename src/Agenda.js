import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './assets/img/motoalejotrans.png'
import './App.css'
function Agenda() {
    return (
        <div className='pepito'>
            {/* Navigation */}
            <Navbar expand="lg" className="bg-body-tertiary shadow  col-12 col-sm-12 col-md-12 col-lg-12 fixed-top">
                <div class="container px-4 px-lg-5">
                    <div className='d-flex '>
                        <img src={logo} className="App-logo2 mx-4" alt="logo" />
                        <Navbar.Brand className='mt-2 ' href="/">Inicio</Navbar.Brand>
                        
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Sesión" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Usuario</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Carrito
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/agenda">Citas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Cerrar Sesión
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </div>
                </Navbar>


            <br className='my-5'></br>
            <br></br>

            {/* 
            <section class="page-section bg-dark text-white">
                
                <Table striped bordered hover className='bg-light text-center container'>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={1}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </Table>
                
            </section> */}
            {/* Listar citas */}
            <div class="container text-center">
                <h1 className='my-5 text-white'>Listando Alumnos...</h1>
                <table class="table table-striped table-bordered bg-white table-sm">
                    <thead>
                    <tr class="table-dark text-white">
                        <th scope="col">DNI</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Accion</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* for user in total_alumnos */}
                    <tr>
                        <th></th>
                        <td></td>
                        <td></td>
                        <td>juan.perez@example.com</td>
                        <td>
                            <li class="btn btn-danger">Modificar</li>
                            <li class="btn btn-danger">Eliminar</li>
                        </td>
                        </tr>
                
            </tbody>
        </table> 
        </div>


    </div>
    );
}

export default Agenda;