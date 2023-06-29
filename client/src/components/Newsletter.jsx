import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Newsletter=()=>{

    const [state, handleSubmit] = useForm("xvonkgrg");
    if (state.succeeded) {
        
        return(
            <div className='newsletter-container'>
            <h3>NEWSLETTER</h3>
            <h1>SUSCRIBITE</h1>
            <p>y enterate de todas las novedades</p>
            <div className='form-container'>
                <h2>¡Gracias por suscribirte a los Newsletter de Pufi!</h2>
            </div>
        </div>
        )

    }

    return(
        <div className='newsletter-container'>
        <h3>NEWSLETTER</h3>
        <h1>SUSCRIBITE</h1>
        <p>y enterate de todas las novedades</p>
        <div className='form-container'>
            <form action="" className='formulario' onSubmit={handleSubmit}>
                <input name="email" id="email" type="email" placeholder='Ingresa tu email'/>
                <button type="submit" disabled={state.submitting}>→</button>
            </form>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors} className="error"/>
        </div>
    </div>
    );
};

export default Newsletter;