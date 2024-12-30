import { Nav, Navbar, NavDropdown, } from 'react-bootstrap'; // Table
import logo from './assets/img/motoalejotrans.png'
import './App.css'
import { useNavigate, useParams } from 'react-router-dom';
import { saveAgenda, searchAgendaByNombre } from './AgendaApi';
import { useEffect, useState } from 'react';


function AgendaEdit() {

    const {Nombre} = useParams();
    const [agenda, setAgenda]= useState({});
    const history = useNavigate();

   

    const search = () =>{

        if (Nombre !== 'new') {
            let result = searchAgendaByNombre(Nombre);
            setAgenda(result);
        }
    }

   
    useEffect(() =>{
        
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
     
   

    const save = () => {
        saveAgenda(agenda);
        history('/agendas');
    }

    
    

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
                        <NavDropdown.Item href="/agendas">Citas</NavDropdown.Item>
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
                <br className='my-5'></br>

                

                
            
            {/* Editar citas */}
           
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-5 text-light">{Nombre === 'new' ? 'Agregar Cita!' : 'Editar Cita!'}</h2>
                        <hr class="divider" />
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5 text-light">
                    <div class="col-lg-6">
                       {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *--> 
                        <!-- This form is pre-integrated with SB Forms.-->   */}
                         {/* <!-- To make this form functional, sign up at--> */}
                         {/* https://startbootstrap.com/solution/contact-forms onChange={e => setAgenda({'Nombremodelo': e.target.value})} value={agenda.Nombremodelo} */}
                         {/* to get an API token! agenda.Nombremodelo = e.target.value */}
                    <form >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                        Nombre y/o modelo
                        </label>
                        <input type="text" className="form-control" id="name" onChange={e => agenda.Nombremodelo = e.target.value} defaultValue={agenda.Nombremodelo} placeholder="Ingresa tu nombre y/o modelo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                        Teléfono
                        </label>
                        <input type="tel" className="form-control" id="phone" onChange={e => agenda.Telefono = e.target.value} defaultValue={agenda.Telefono} placeholder="Ingresa tu número de teléfono" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                        Fecha
                        </label>
                        <input type="date" className="form-control" id="date" onChange={e => agenda.Fecha = e.target.value} defaultValue={agenda.Fecha} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                        Hora
                        </label>
                        <input type="time" className="form-control" id="time" onChange={e => agenda.Hora = e.target.value} defaultValue={agenda.Hora} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service" className="form-label">
                        Servicio
                        </label>
                        <select className="form-select" id="service" onChange={e => agenda.Servicio = e.target.value} Value={agenda.Servicio} required>
                        <option value="" disabled selected>
                            Selecciona un servicio
                        </option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="reparacion">Reparación</option>
                        <option value="revision">Revisión general</option>
                        </select>
                    </div>
                    <button type='submit' onClick={save} className="btn btn-success w-100">
                    Agendar Cita
                </button>
                    </form>
                    
                    </div>
                </div>
                
            </div>
            
        


    </div>
    );
}

export default AgendaEdit;