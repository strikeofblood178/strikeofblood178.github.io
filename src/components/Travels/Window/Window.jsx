import cn from 'clsx';
import Button from '../../UI/Button/Button';
import styles from './Window.module.css';

const Window = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box__one}>
            <div className={styles.image}>
                <img src={`img/${665}.png`} alt="" />
                </div>

                {/* <div className={styles.flex}> */}
            <div className={styles.img}>
                <img src={`img/${666}.png`} alt="" />
                </div>
            <div className={styles.img}>
                <img src={`img/${667}.png`} alt="" />
                </div>
            <div className={styles.img}>
                <img src={`img/${668}.png`} alt="" />
                </div>
                {/* </div> */}


        </div>




{/* второй бокс контейнер */}



        <div className={styles.box__two}>

{/* заголовок с название карточки ценной и кнопкой */}


            <div className={styles.title}>
                <h1 className={styles.title__h1}>Вечер в куполе</h1>
                <div className={styles.title__select}>
                    <h1 className={styles.title__price}>от 3 000 ₽</h1>
                    <select className={styles.title__selects} name="" id="">
                        <option className={styles.title__option} value="">На двоих</option>
                        <option className={styles.title__option} value="">До 6 чел.</option>
                        <option className={styles.title__option} value="">10 минут</option>
                    </select>
                </div>

                <div>
                <Button type="small">Заказать впечатление</Button>
                </div>

            </div>

{/* контекст содержимого в модальном окне */}

            <div className={styles.context}>
                <div className={styles.context__title}>
                    <h2 className={styles.context__h2}>Подробнее о впечатлении: </h2>
                    </div>
                    
                <div className={styles.context__description}>
                    <p className={styles.context_text}>Уютный вечер под открытым небом в любое время года — это абсолютно реально! </p>
                    <p className={styles.context_text}>В обогреваемом прозрачном куполе на крыше в самом центре города можно и любоваться закатом, и отгадывать созвездия, и наслаждаться обществом друг друга. </p>
                    <p className={styles.context_text}>Вас ждут мягкие диваны, любимая музыка, красивые огоньки, стильный декор. И, конечно же, вкусные угощения 😏 </p>
                    <p className={styles.context_text}>Купола находятся в самом центре города на улице. Крымова</p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                </div>
                <div className={styles.context__price}>

                    <div className={styles.context__block}>
                    <div className={styles.context__price_title}>
                        <h2 className={styles.context__copy}>Уютный вечер - 3 000 рублей</h2>
                    </div>
                    <div className={styles.context__price_text}>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    </div>
                    <div className={styles.context__price_ul}>
                        <ul className={styles.context__ul}>
                            <li className={styles.context__li}><p className={styles.black}>Продолжительность — 2 часа</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Уютный, стильно декорированный купол</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Bluetooth-колонка, через которую вы сможете поставить любимую музыку</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Специально подготовленные вопросы, которые вы сможете задать друг другу, чтобы интересно провести время</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Вкусные и сытные закуски</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Ароматный чай</p></li>
                            <li className={styles.context__li}><p className={styles.black}></p></li>
                            <li className={styles.context__li}><p className={styles.black}></p></li>
                        </ul>
                    </div>
                    </div>


{/* второй заголовок со списком */}

                    <div className={styles.context__block}>
                    <div className={styles.context__price_title}>
                        <h2 className={styles.context__copy}>Романтическое свидание - 4 500 рублей</h2>
                    </div>
                    <div className={styles.context__price_ul}>
                        <ul className={styles.context__ul}>
                            <li className={styles.context__li}><p className={styles.black}>Продолжительность — 2 часа</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Уютный, стильно декорированный купол</p> </li>
                            <li className={styles.context__li}><p className={styles.black}>Bluetooth-колонка, через которую вы сможете поставить любимую музыку</p> </li>
                            <li className={styles.context__li}><p className={styles.black}>Лепестки роз для романтичной атмосферы</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Специально подготовленные вопросы, которые вы сможете задать друг другу, чтобы интересно провести время</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Сытный ужин для двоих</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Сладкий десерт</p></li>
                            <li className={styles.context__li}><p className={styles.black}>Ароматный чай</p></li>
                        </ul>
                    </div>
                    </div>


{/* конец модального окна в виде текста */}

                <div className={styles.context__block}>
                    <div className={styles.context__description}>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                </div>
                </div>


{/* повторяющийся текст внизу с заголовком */}

                <div className={styles.context__block}>
                <div className={styles.context__title}>
                    <h2 className={styles.context__copy}></h2>
                    </div>

                <div className={styles.context__description}>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                    <p className={styles.context_text}></p>
                </div>
                </div>
                        

                </div>
            </div>
        </div>

    </div>
  )
}

export default Window