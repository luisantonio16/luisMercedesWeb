import React from "react";

function Estudio() {
    return (
        <>
            <div className="curriculum">
                <header className="curriculum-header">
                    <h3 className="header-title">Curriculum</h3>
                  
                </header>

                <div className="curriculum-container">
                    <section className="curriculum-left">
                        <header className="curriculum-subheader">
                            <h2 className="subheader-title">Formacion</h2>
                        </header>

                        <div className="curriculum-linea"></div>

                        <article className="curriculum-timelines">
                            <div className="timeline-items">

                                <div className="timeline-header">
                                    <h3 className="timeline-years">2016</h3>
                                    <span className="timeline-company">Tecnico Informatica</span>
                                </div>

                                <div className="timeline-divisor"></div>

                                <div className="timeline-description">
                                    <h3 className="timeline-title">Tecnico en Informatica</h3>
                                    <p className="timeline-info">Polictenico nuestra señora de la Altagracia.</p>
                                </div>
                            </div>
                        </article>

                        <article className="curriculum-timelines">
                            <div className="timeline-items">
                                <div className="timeline-header">
                                    <h3 className="timeline-years">2023</h3>
                                    <span className="timeline-company">Lic. Informatica</span>
                                </div>
                                <div className="timeline-divisor"></div>

                                <div className="timeline-description">
                                    <h3 className="timeline-title">Lic.Informatica</h3>
                                    <p className="timeline-info">Universidad autonoma de santo domingo, "UASD".</p>

                                </div>
                            </div>
                        </article>

                        <div className=" curriculum-experiencia">
                            <header className="curriculum-subheader">
                                <h2 className="subheader-title">Experiencia</h2>
                            </header>

                            <article className="curriculum-timelines">
                                <div className="timeline-items">

                                    <div className="timeline-header">
                                        <h3 className="timeline-years">2022</h3>
                                        <span className="timeline-company">Archangeli Corporation</span>
                                    </div>

                                    <div className="timeline-divisor"></div>

                                    <div className="timeline-description">
                                        <h3 className="timeline-title">Desarrollador Web</h3>
                                        <p className="timeline-info">Encargado de desarrollar y diseñar la web de la empresa.</p>
                                    </div>
                                </div>
                            </article>

                        </div>

                    </section>



                    <section className="curriculum-right">
                        <section>
                            <header className="curriculum-subheader">
                                <h2 className="subheader-title">Habilidades en <span className="subheader-subtitle">Codigo</span></h2>
                            </header>

                            <div className="curriculum-skills">

                                <article className="skills-titles">
                                    <h4 className="skill-text">Html5 & Css3</h4>
                                    <span className=" skill-number">80%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje ochenta"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">JavaScript</h4>
                                    <span className=" skill-number">60%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje sesenta"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">React.js</h4>
                                    <span className=" skill-number">65%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje sesentacinco"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">C#</h4>
                                    <span className=" skill-number">70%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje setenta"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">Sql Server</h4>
                                    <span className=" skill-number">60%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje sesenta"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">MongoDB</h4>
                                    <span className=" skill-number">50%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje cincuenta"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">Node.js</h4>
                                    <span className=" skill-number">50%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje cincuenta"></div>
                                </div>
                            </div>

                        </section>

                        <section className="curriculum-idiomas">
                            <header className="curriculum-subheader">
                                <h2 className="subheader-title">Idiomas</h2>
                            </header>

                            <div className="curriculum-skills">
                                <article className="skills-titles">
                                    <h4 className="skill-text">Español</h4>
                                    <span className=" skill-number ">100%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje"></div>
                                </div>

                                <article className="skills-titles">
                                    <h4 className="skill-text">English</h4>
                                    <span className=" skill-number">50%</span>
                                </article>

                                <div className="skills-progresbar">
                                    <div className="skill-porcentaje cincuenta"></div>
                                </div>

                            </div>


                        </section>

                    </section>
                </div>
            </div>

        </>

    );
}

export default Estudio;