import React, { useEffect, useRef, useState } from 'react'
import './home.scss'

import { IoMdArrowDropdown } from 'react-icons/io'
import ParticleBackground from '../../components/particle/ParticleBackground'
import { Link } from 'react-router-dom'






const Home = () => {

    const [pods, setPods] = useState('')
    const [podNames, setPodNames] = useState(false)
    const [icons, setIcons] = useState(false)
    const [open, setOpen] = useState(false)

    let menuref = useRef()
    let iconref = useRef()

    const [categories, setCategories] = useState([
        {
            names: [{ res: 'Танк', linkto: '/Tank' }, { res: 'Вертолет', linkto: '/Vert' }, { res: 'Дельтоплан', linkto: '/Delt' }],
            name: 'Транспорт'
        },
        {
            names: [{ res: 'Парашют', linkto: '/Para' }, { res: 'Прожектор', linkto: '/Prozh' }, { res: 'Швейная машинка', linkto: '/Shve' }],
            name: 'Приборы'
        },
        {
            names: [{ res: 'Паровая пушка', linkto: '/Paro' }, { res: 'Скорострельный арбалет', linkto: '/Skoro' }],
            name: 'Оружие'
        },


        // {
        //     names: ['Танк', 'Вертолет', 'Дельтоплан'],
        //     name: 'Транспорт'
        // },
        // {
        //     names: ['Парашют', 'Прожектор', 'Швейная машинка'],
        //     name: 'Приборы'

        // },
        // {
        //     names: ['Паровая пушка', 'Скорострельный арбалет',],
        //     name: 'Оружие'

        // }
    ])

    const indexOfArr = (index) => {
        const idOfNames = categories[index].names
        setPods(idOfNames)
        setPodNames(index)
        setIcons(!icons)
        setOpen(!open)
    }
    useEffect(() => {
        const iconler = e => {

        }
        const handler = e => {
            if (!menuref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])

    return (
        <div className='home' >
            <div className="home__overlay"></div>
            <div className="container">
                <div className="home__title__wrapper">
                    <h1 className="home__title">Виды изобретений</h1>
                </div>
                <div className="home__content">
                    <div className='home__list' >
                        {categories.map((categorie, index) =>
                            // имя категории
                            <div key={index} onClick={() => indexOfArr(index)} className='home__link'>{categorie.name}
                                {/* иконка */}
                                <IoMdArrowDropdown className={`home__icon ${podNames === index && open ? 'active' : ''}`} />
                                {/* покатегория */}
                                <div ref={menuref} className={`home__pods ${podNames === index && open ? 'active' : ''}`}>
                                    {categorie.names.map((name, i) =>

                                        <Link to={name.linkto} key={i} className="home__pod">

                                            {name.res}
                                        </Link>
                                    )}
                                </div>

                            </div>
                        )}
                        {/* <div className="home__categories">
                            <div className={`${pods.length !== 0 && 'bg'} home__categorie `}>
                                {pods.length === 0 ? <h5>Выберите категорию</h5> :
                                    pods.map((pod) => (
                                        <div className='home__pod'>
                                            {pod}
                                        </div>
                                    ))

                                }
                            </div>
                        </div> */}

                    </div>



                </div>
            </div>
        </div>
    )
}

export default Home