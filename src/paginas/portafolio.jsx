import React from 'react'
import pokemon from '../assets/pokedex.png'
import movie from '../assets/movie.png'
import weather from '../assets/weather.png'
import memorygame from '../assets/memory.png'
import space from '../assets/space.png'
import tictac from '../assets/tic.png'
import hodiee from '../assets/hodiee.png'



function portafolio() {
    return (
        <>
            <section className='portafolio'>
                <header className="portafolio-header">
                    <h3 className="header-title">Proyectos</h3>
                   
                </header>

                <div className='portafolio-container'>
                    <div className="portafolio-cards">
                        <div className="card">
                            <div className="card-images">
                                <img src={memorygame} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Memory games</h2>
                                <p className='card-subtitle'>Divertido juego realizado con JavaScript</p>
                                <div className='card-icons'>
                                    <i class='bx bxl-html5 card-icon'></i>
                                    <i class='bx bxl-css3 card-icon'></i>
                                    <i class='bx bxl-javascript card-icon'></i>
                                </div>

                                <a href="https://fastidious-baklava-8c4c23.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-images">
                                <img src={pokemon} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Pokedex</h2>
                                <p className='card-subtitle'>Una pokedex intuitiva totalmente realizada con javaScript.</p>
                                <div className='card-icons'>
                                    <i class='bx bxl-html5 card-icon'></i>
                                    <i class='bx bxl-css3 card-icon'></i>
                                    <i class='bx bxl-javascript card-icon'></i>
                                </div>

                                <a href="https://regal-rabanadas-c084bd.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-images">
                                <img src={weather} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Weather App</h2>
                                <p className='card-subtitle'>Una pequeña app sobre el clima, consumiendo una Api con javaScript.</p>
                                <div className='card-icons'>
                                    <i class='bx bxl-html5 card-icon'></i>
                                    <i class='bx bxl-css3 card-icon'></i>
                                    <i class='bx bxl-javascript card-icon'></i>
                                </div>

                                <a href="https://profound-chaja-26f5f7.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-images">
                                <img src={space} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Space Web</h2>
                                <p className='card-subtitle'>Una maravillosa web inspirada en el espacio.</p>
                                <div className='card-icons'>
                                    <i class='bx bxl-html5 card-icon'></i>
                                    <i class='bx bxl-css3 card-icon'></i>
                                    <i class='bx bxl-javascript card-icon'></i>
                                </div>

                                <a href="https://webpagesite.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-images">
                                <img src={tictac} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Tic Tac Toe</h2>
                                <p className='card-subtitle'>El famoso juego, tic-tac-toe, realizado con react.</p>
                                <div className='card-icons'>
                                    <i className='bx bxl-react card-icon'></i>
                                    <i class='bx bxl-javascript card-icon'></i>
                                </div>

                                <a href="https://resplendent-sunburst-b7a597.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-images">
                                <img src={movie} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Movie LM</h2>
                                <p className='card-subtitle'>Una app para buscar peliculas, realizada y consumiendo una api con React.</p>
                                <div className='card-icons'>
                                    <i className='bx bxl-react card-icon'></i>
                                    <i class='bx bxl-javascript card-icon'></i>
                                </div>

                                <a href="https://themovielm.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>

                        <div className="card">
                            <div className="card-images">
                                <img src={hodiee} className='card-image' />
                            </div>
                            <div className='card-contenido'>
                                <h2 className='card-title'>Hodiee</h2>
                                <p className='card-subtitle'>Mi Red social hodiee, entra y descubre como funciona.</p>
                                <div className='card-icons'>
                                    <i className='bx bxl-react card-icon'></i>
                                    <i class='bx bxl-nodejs card-icon'></i>
                                    <i class='bx bxl-mongodb card-icon'></i>
                                </div>

                                <a href="https://hodiee.netlify.app/" target='_blank' className='card-btn'>Visitar</a>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
        </>
    )
}

export default portafolio