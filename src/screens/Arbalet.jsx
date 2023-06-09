import React from 'react'
import './tank/tank.scss'
import first from '../../src/img/arbalet/34.jpg'
import sec from '../../src/img/arbalet/35.jpg'
import thi from '../../src/img/arbalet/36.jpg'

const Arbalet = () => {
    return (
        <div className='tank'>
            <div className="tank__overlay"></div>
            <div className="container">
                <h1 className="tank__firstTitle ">Арбалет –  </h1>
                <img className='_img' src={first} alt="" />

                <div className="tank__secondtext _title">
                    В Великой Греции (Сиракузах) в V веке до нашей эры. Греческий арбалет назывался гастрофетом (брюшным луком), так как его конструкция предусматривала уже не только спусковой механизм, но и рычажный механизм взведения.

                </div>
                <img className='_img' src={sec} alt="" />
                <div className="tank__thirdText _title">
                    Леонардо да Винчи задумывал идею арбалета намного больше размеров обычного ручного. Это своего рода орудие, призванное обеспечить большую убойную силу. Из описания Леонардо видно, что раствор плеча арбалета, т.е. его длина до места крепления тетивы составляет 42 длины рукояти, в раскрытом виде длина арбалета - 42 длины плеча (грубо 24 м). Он должен был устанавливаться на "тележку" шириной в 2 и длиной в 40 длин рукояти. Колеса тележки крепились под углом для придания ей устойчивости при стрельбе. Стрела для этого арбалета изготовлялась из плоских секций с тем, чтобы увеличить ее прочность и гибкость. Тетива натягивалась с помощью специального крепления, показанного в правом нижнем углу рисунка. Слева изображен спусковой механизм.

                </div>
                <img className='_img' src={thi} alt="" />
                <div className="tank__thirdText _title">
                    XVI веке арбалеты оказали большую помощь конкистадором в ходе завоевания Южной и Центральной Америки. Однако захват Америки стал лебединой песней арбалета - ему на смену шел мушкет.
                    <br />В XVII веке появились новые модели охотничьих арбалетов, адаптированные для стрельбы по птицам. Ну и тут арбалету не удалось удержать своих позиций - его вытеснили охотничья ружья.
                    <br />В начале ХХ века арбалет превратился в спортивное оружие. В 1956 был основан Международный арбалетный союз (IAU), в 1958 году в Бельгии был проведен первый чемпионат Европы по спортивной стрельбе из арбалета. В 1979 году состоялся первый чемпионат мира по этому виду спорта. Сегодня рассматривается вопрос о том, чтобы включит стрельбу из арбалета в число олимпийских видов спорта.

                </div>
            </div>


        </div>
    )
}

export default Arbalet