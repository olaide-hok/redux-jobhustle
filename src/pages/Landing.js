import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'


const Landing = () => {

  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>

        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>
                    job <span>Hustling</span> platform
                </h1>
                <p>
                Typewriter whatever fixie, enim swag blue bottle thundercats photo 
                booth DSA vice cray chia. Swag vice plaid salvia hexagon echo park 
                crucifix.Adaptogen keffiyeh letterpress butcher seitan activated 
                charcoal beard.
                </p>
                <button className='btn btn-hero'>Login/Register</button>

            </div>
            {/* Image */}
            <img src={main} alt='job hunter' className='img main-img' />
        </div>
    </Wrapper>
    )
}

export default Landing