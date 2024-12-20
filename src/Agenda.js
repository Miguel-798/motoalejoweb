import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './assets/img/motoalejotrans.png'
import './App.css'
function Agenda() {
    return (
        <div>
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
            {/* Listar citas */}
            <div class="container">
                <h1 className='my-5'>Listando Alumnos...</h1>
                <table class="table table-striped table-bordered bg-white table-sm">
                    <thead>
                    <tr class="table-primary">
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
                        <td></td>
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