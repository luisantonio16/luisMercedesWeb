import React from "react";

function About() {
    return (
        <>
            <div className="about__section-container">
                <header className="about__header">
                    <div>
                        <h2 className="about-text-title">Sobre <span className="header-subtitle">Mi</span></h2>

                    </div>
                </header>

                <div className="about__container-informacion">
                    <div className="about-text">
                        <p className="about-text-parrafo">Soy Lic.Informatica, egresado de la Universidad Autonoma de Santo Domingo "UASD", Me encanta el Desarrollo de sistemas y paginas web, tengo 22 Años de edad, actualmente vivo en la ciudad de santo domingo, Republica Dominicana.
                        </p>

                    </div>
                    <div className="about-info">
                        <ul className="about-info-list">
                            <li className="info-list">
                                <span className="info-list-title">Edad</span>
                                <span className="info-list-value">22</span>

                            </li>
                            <li className="info-list">
                                <span className="info-list-title">Pais</span>
                                <span className="info-list-value">Republica Dominicana</span>
                            </li>
                            <li className="info-list">
                                <span className="info-list-title">Direccion</span>
                                <span className="info-list-value">Santo domingo</span>
                            </li>
                            <li className="info-list">
                                <span className="info-list-title">Correo</span>
                                <span className="info-list-value">luis16.16m@gmail.com</span>
                            </li>
                            <li className="info-list">
                                <span className="info-list-title">Telefono</span>
                                <span className="info-list-value">829-302-6793</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>

    );

}

export default About;