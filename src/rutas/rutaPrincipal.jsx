import React, { useState } from 'react'
import { Routes, BrowserRouter, Route, Link, NavLink } from "react-router-dom"
import Home from "../paginas/home.jsx"
import About from "../paginas/about.jsx"
import Estudio from "../paginas/curriculum.jsx";
import luis from '../assets/Luis.jpg'
import Portafolio from "../paginas/portafolio.jsx";
import Contacto from "../paginas/contacto.jsx";




function RutaPrincipal() {
    const [show, setShow] = useState(false);
    let isShow = false;


    return (
        <>
            <BrowserRouter>
                <div className="layout">
                    {/* <!-- barra lateral de informancion de usuario --> */}

                    <div className="container__menu-icon">
                        <article className="menu-icon" onClick={()=> setShow((isShow) => !isShow)}>
                            <i className='bx bx-menu-alt-right icon-menu' ></i>
                        </article>
                    </div>

                    <aside className= {`layout__aside ${show ? "active" : ""}`}> 
                        <section className="aside__user-info">
                            {/* <!-- informancion general del usuario --> */}
                            <div className="user-info__general">
                                <div className="user-info__imagen">
                                    <img src={luis} />

                                </div>

                                <h2 className="user-info__name">Luis Mercedes</h2>
                                <h4 className="user-info__trabajo">Desarrollador Software</h4>

                            </div>

                            {/* <!-- menu de navegacion --> */}
                            <nav className="aside__menu">
                                <ul className="menu__list">
                                    <li className="menu__option" >
                                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'menu__link'} >
                                            <i className='menu__icon bx bxs-home'></i>
                                            <span className="menu__title">Home</span>
                                        </NavLink>
                                    </li>
                                    <li className="menu__option">
                                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : 'menu__link'}>
                                            <i className='menu__icon bx bxs-user'></i>
                                            <span className="menu__title">Sobre mi</span>
                                        </NavLink>
                                    </li>

                                    <li className="menu__option">
                                        <NavLink to="/estudio" className={({ isActive }) => isActive ? 'active' : 'menu__link'}>
                                            <i className='menu__icon bx bxs-graduation'></i>
                                            <span className="menu__title">Curriculum</span>
                                        </NavLink>
                                    </li>

                                    <li className="menu__option">
                                        <NavLink to="/portafolio" className={({ isActive }) => isActive ? 'active' : 'menu__link'}>
                                            <i className='menu__icon bx bxs-briefcase-alt-2' ></i>
                                            <span className="menu__title">Portafolio</span>
                                        </NavLink>
                                    </li>

                                    <li className="menu__option">
                                        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : 'menu__link'}>
                                            <i className='menu__icon bx bxs-envelope'></i>
                                            <span className="menu__title">Contacto</span>
                                        </NavLink>
                                    </li>

                                </ul>
                            </nav>

                            <div className="user-info__user-links">
                                <ul className="user-link__social">
                                    <li className="social-options">
                                        <a href="#" className="social-links">
                                            <i className='bx bxl-instagram-alt'></i>
                                        </a>
                                    </li>

                                    <li className="social-options">
                                        <a href="#" className="social-links">
                                            <i className='bx bxl-github'></i>
                                        </a>
                                    </li>

                                    <li className="social-options">
                                        <a href="#" className="social-links">
                                            <i className='bx bxl-linkedin-square'></i>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="user-info-buttons">
                                <a href="#" className="user-info-btn">Descargar CV</a>
                            </div>

                            <div className="user-info__footer">
                                &copy; Luis Melenciano Web

                            </div>


                        </section>
                    </aside>

                    <main className="layout-container">
                        <section className="container-page sections">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/estudio" element={<Estudio />} />
                                <Route path="/portafolio" element={<Portafolio />} />
                                <Route path="/contacto" element={<Contacto />} />
                            </Routes>
                        </section>
                    </main>

                </div>



            </BrowserRouter>
        </>

    );
}

export default RutaPrincipal;