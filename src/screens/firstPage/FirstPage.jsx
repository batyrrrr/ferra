import React from 'react'
import ParticleBackground from '../../components/particle/ParticleBackground'

import './firstPage.scss'
import { Link } from 'react-router-dom'

const FirstPage = () => {
    return (
        <div className="fpage">
            <ParticleBackground />
            <div className="fpage__all">
                <div className="fpage__content">
                    <p className="fpage__text">
                        Добро пожаловать!!!
                    </p>
                </div>
                <Link className='fpage__button' to='/ferra/Home'>Перейти</Link>
            </div>
        </div>
    )
}

export default FirstPage