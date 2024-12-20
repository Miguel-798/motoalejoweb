import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import logo from './assets/img/motoalejotrans.png'
// import llaves from './assets/img/portfolio/fullsize/llaves.png'
import muro from './assets/img/portfolio/fullsize/muro.png'
import motor from './assets/img/portfolio/fullsize/motor.png'
import repuestos from './assets/img/portfolio/fullsize/repos.png'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Landing() {
    return (
        <div>
      {/* Navigation 
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3 bg-light" >
      <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto my-2 my-lg-0">
                  <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                  <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                  <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                  <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
              </ul>
          </div>
      </div>
    </nav>*/}

    {/* Mobile topbar */}
    <Navbar expand="lg" className="bg-body-tertiary shadow col-12 col-sm-12 col-md-12 col-lg-12 fixed-top">
                <div class="container px-4 px-lg-5">
                    <div className='d-flex '>
                        <img src={logo} className="App-logo2 mx-4" alt="logo" />
                        <Navbar.Brand className='mt-2' href="#inicio">Inicio</Navbar.Brand>
                        
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#taller">Taller</a></li>
                        <li class="nav-item"><a class="nav-link" href="#services">A tu servicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Servicios</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Agendar</a></li>
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

    {/* Masthead */}
    <header class="masthead" id='inicio'>
      <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
              <div class="col-lg-8 align-self-end">
                  <h1 class="text-white font-weight-bold">Taller de motos 'Moto Alejo'</h1>
                  <hr class="divider" />
              </div>
              <div class="col-lg-8 align-self-baseline">
                  <p class="text-white-75 mb-5">Mantenimiento y reparacion de motos, toda marca, todo modelo!</p>
                  <a class="btn btn-primary btn-xl" href="#taller">Ver mas</a>
              </div>
          </div>
      </div>
    </header>

    {/* about */}
    <section class="page-section bg-primary" id="taller">
      <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-lg-8 text-center">
                  <h2 class="text-white mt-0">Tenemos lo que necesitas!</h2>
                  <hr class="divider divider-light" /> 
                  <p class="text-white-75 mb-4">En el taller MotoAlejo tenemos todo lo que tu moto requiere para funcionar al 100%! Escoge nuestros servicios de reparacion y mantenimiento, tambien compra algunos repuestos, tu moto esta en buenas manos!</p>
                  <a class="btn btn-light btn-xl" href="#services">Empecemos!</a>
              </div>
          </div>
      </div>
    </section>
    {/* services */}
    <section class="page-section" id="services">
            <div class="container px-4 px-lg-5">
                <h2 class="text-center mt-0">At Your Service</h2>
                <hr class="divider" />
                <div class="row gx-4 gx-lg-5">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-gem fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Sturdy Themes</h3>
                            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-laptop fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-globe fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Ready to Publish</h3>
                            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                            <div class="mb-2"><i class="bi-heart fs-1 text-primary"></i></div>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* portfolio */}
        <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href={motor} title="Project Name">
                            <img class="img-fluid" src={motor} alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Observar</div>
                                <div class="project-name">Servicios</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="#inicio" title="Project Name">
                            <img class="img-fluid" src={muro} alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Agenda</div>
                                <div class="project-name">Citas</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href={repuestos} title="Project Name">
                            <img class="img-fluid" src={repuestos} alt="..." />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">Mirar</div>
                                <div class="project-name">Productos</div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* */}
        <section class="page-section bg-dark text-white">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mb-4">Free Download at Start Bootstrap!</h2>
                <a class="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a>
            </div>
        </section> 
        {/* Contact */}
        <section class="page-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Agenda una cita!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">¿Deseas que se te aparte una hora del día para ser atendido/a? <br></br>¡llena el siguiente formulario para agendar una cita! presiona 1: a.m o 2: p.m</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                       {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *--> 
                        <!-- This form is pre-integrated with SB Forms.-->   */}
                         {/* <!-- To make this form functional, sign up at--> */}
                         {/* https://startbootstrap.com/solution/contact-forms */}
                         {/* to get an API token! */}
                    <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                        Nombre y/o modelo
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre y/o modelo" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                        Teléfono
                        </label>
                        <input type="tel" className="form-control" id="phone" placeholder="Ingresa tu número de teléfono" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">
                        Fecha
                        </label>
                        <input type="date" className="form-control" id="date" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="time" className="form-label">
                        Hora
                        </label>
                        <input type="time" className="form-control" id="time" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="service" className="form-label">
                        Servicio
                        </label>
                        <select className="form-select" id="service" required>
                        <option value="" disabled selected>
                            Selecciona un servicio
                        </option>
                        <option value="mantenimiento">Mantenimiento</option>
                        <option value="reparacion">Reparación</option>
                        <option value="revision">Revisión general</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success w-100">
                        Agendar Cita
                    </button>
                    </form>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-4 text-center mb-5 mb-lg-0">
                        <i class="bi-phone fs-2 mb-3 text-muted"></i>
                        <div>Gracias</div>
                    </div>
                </div> 
            </div>
        </section> 
        {/* Footer */}
            <footer class="bg-light py-5">
                <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Copyright &copy; 2024 - MotoAlejo</div></div>
                <div class="container px-4 px-lg-5"><div class="small text-center text-muted">Contacto: +1 (555) 584 8822</div></div>
            </footer>
</div>
    );
}

export default Landing;