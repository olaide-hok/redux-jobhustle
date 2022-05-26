import React from 'react'
import styled from 'styled-components'
// import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'


const Landing = () => {

  return (
    <Wrapper>
        <nav>
            {/* <img src={logo} alt='jobhustle logo' className='logo' /> */}
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

const Wrapper = styled.main`
    nav {
        width: var(--fluid-width);
        max-width: (--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display: flex;
        align-items: center;
    }
    .page {
        min-height: calc(100vh - var);
        display: grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1 {
        font-weight: 700;
        span {
            color: var(--primary-500);
        }        
    }
    p {
        color: var(--grey-600)
    }
    .main-img {
        display: none;
    }
    @media (min-width: 992px) {
        .page {
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img {
            display: block;
        }
    }
`

export default Landing