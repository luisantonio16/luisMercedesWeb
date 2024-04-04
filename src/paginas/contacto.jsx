import React from 'react'
import code from "../assets/code.png"
import mail from "../assets/mail.png"
import gps from "../assets/location.png"
import phone from "../assets/phone.png"

function contacto() {
    return (
        <>
            <section className='contacto'>

                <header className="curriculum-header">
                    <h3 className="header-title">Contacto</h3>
                  
                </header>


                <div className="contacto-container">

                    <section className='contacto-info'>
                        <div className='contacto-data'>
                            <img className='contacto-img' src={gps} alt="" />
                            <h2 className='contacto-title'>Location</h2>
                        </div>

                        <div className='contacto-data'>
                            <img className='contacto-img' src={phone} alt="" />
                            <h2 className='contacto-title'>+1829 302 6793</h2>
                        </div>

                        <div className='contacto-data'>
                            <img className='contacto-img' src={mail} alt="" />
                            <h2 className='contacto-title'>luis16.16m@gmail.com</h2>
                        </div>

                        <div className='contacto-data'>

                            <img className='contacto-img' src={code} alt="" />
                            <h2 className='contacto-title'>Location</h2>
                        </div>

                    </section>

                    <section className='contacto-form'>

                        <div className='form-mapa'>
                            <iframe className='form-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6356.896177498941!2d-70.17654324028564!3d18.671484838416934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaff1df5b378c7f%3A0xae6a0e9b4a372510!2sDistrito%20Educativo%2004-04%20Villa%20Altagracia!5e0!3m2!1ses!2sdo!4v1696556997729!5m2!1ses!2sdo" frameBorder='0' scrolling='no' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>

                        <header className='form-header'>
                            <h3 className='form-title'>¿como puedo <span className='form-sub'>ayudarte?</span></h3>
                        </header>

                        <form action="" className="form">
                            <div className="form-container">
                                <div className="form-left">
                                    <div className="form-group">
                                        <input type="text" className="form-input" placeholder='Nombre' name='name' required />
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-input" placeholder='Email' name='name' required />
                                        <label htmlFor="name" className="form-label">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-input" placeholder='Asunto' name='name' required />
                                        <label htmlFor="name" className="form-label">Asunto</label>
                                    </div>

                                </div>

                                <div className="form-right">
                                    <div className="form-group form-group-area">
                                        <textarea name="mensaje" id="form-tex-area" className=" form-input form-input--tex_area" placeholder='Mensaje' ></textarea>
                                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                    </div>

                                </div>

                            </div>

                            <input type="submit" className='form-btn' value="Enviar Mensaje" />
                        </form>

                    </section>

                </div>
                
            </section>
        </>
    )
}

export default contacto;
