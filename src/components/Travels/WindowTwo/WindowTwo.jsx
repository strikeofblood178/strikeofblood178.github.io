import cn from 'clsx';
import Button from '../../UI/Button/Button';
import styles from './WindowTwo.module.css';
import {ImCross} from "react-icons/im";

const WindowTwo = ({prop, add, cancelled, vissible}) => {
  return (
    <div className={styles.container}>

{ Object.keys(prop).map((add) =>{
       })}

       {/* иконка */}
       <ImCross onClick={cancelled} className={cn(styles.cross,  )}/>

        <div className={styles.box__one}>
            <div className={styles.image}>
                <img className={styles.box_size} src={`img/${prop[add].image}.png`} alt="" />
                </div>

                <div className={styles.flex}>
            <div className={styles.img}>
                <img className={styles.box_size_img} src={`img/${prop[add].image1}.png`} alt="" />
                </div>
            <div className={styles.img}>
                <img className={styles.box_size_img} src={`img/${prop[add].image2}.png`} alt="" />
                </div>
            <div className={styles.img}>
                <img className={styles.box_size_img} src={`img/${prop[add].image3}.png`} alt="" />
                </div>
                </div>

{/* див айкон */}
                


        </div>




{/* второй бокс контейнер */}



        <div className={styles.box__two}>

{/* заголовок с название карточки ценной и кнопкой */}


            <div className={styles.title}>
            { prop[add].name && <h1 className={styles.title__h1}>{prop[add].name}</h1>}
                <div className={styles.title__select}>
                { prop[add].count &&  <h1 className={styles.title__price}>{prop[add].ot} { prop[add].count } ₽</h1>}

                { prop[add].select && <select className={styles.title__selects} name="" id="">
                        { prop[add].option && <option className={styles.title__option} value="">{ prop[add].option }</option>}
                        { prop[add].option1 && <option className={styles.title__option} value="">{ prop[add].option1 }</option>}
                        { prop[add].option2 && <option className={styles.title__option} value="">{ prop[add].option2 }</option>}
                    </select>}
                </div>

                <div onClick={vissible}>
                <Button click={cancelled} type="small">{prop[add].button}</Button>
                </div>

            </div>

{/* контекст содержимого в модальном окне */}

            <div className={styles.context}>
                <div className={styles.context__title}>
                    { prop[add].text && <h2 className={styles.context__h2}> {prop[add].text} </h2>}
{/* как спрятать детали! */}
                    {/* { prop[add].to && <h2 className={styles.context__h2}> {prop[add].name} </h2>} */}
                    </div>
                    
                <div className={styles.context__description}>
                    { prop[add].context_text && <p className={styles.context_text}>{prop[add].context_text}</p>}
                    { prop[add].context_text1 && <p className={styles.context_text}>{prop[add].context_text1}</p>}
                    { prop[add].context_text2 && <p className={styles.context_text}>{prop[add].context_text2}</p>}
                    { prop[add].context_text3 && <p className={styles.context_text}>{prop[add].context_text3}</p>}
                    { prop[add].context_text4 && <p className={styles.context_text}>{prop[add].context_text4}</p>}
                    { prop[add].context_text5 && <p className={styles.context_text}>{prop[add].context_text5}</p>}
                </div>
                <div className={styles.context__price}>

                    <div className={styles.context__block}>

                    { prop[add].context_copy && 
                    <div className={styles.context__price_title}>
                        <h2 className={styles.context__copy}>{prop[add].context_copy}</h2>
                    </div>
                    }


                     {/* { prop[add].price_text && 
                     <div className={styles.context__price_text}>
                     <p className={styles.context_text}>{prop[add].price_context}</p>
                     <p className={styles.context_text}>{prop[add].price_context1}</p>
                     <p className={styles.context_text}>{prop[add].price_context2}</p>
                     </div>
                     } */}




{/* первый список */}
                     
                    { prop[add].cancel && 
                    <div className={styles.context__price_ul}>
                    { prop[add].context_ul  && <ul className={styles.context__ul}>
                            { prop[add].context_li &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li}</p></li>}
                            { prop[add].context_li1 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li1}</p></li>}
                            { prop[add].context_li2 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li2}</p></li>}
                            { prop[add].context_li3 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li3}</p></li>}
                            { prop[add].context_li4 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li4}</p></li>}
                            { prop[add].context_li5 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li5}</p></li>}
                            { prop[add].context_li6 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li6}</p></li>}
                            { prop[add].context_li7 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li7}</p></li>}
                        </ul>}
                    </div>
                    }

                    {/* <div className={styles.context__price_ul}>
                    { prop[add].context_ul  && <ul className={styles.context__ul}>
                            { prop[add].context_li &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li}</p></li>}
                            { prop[add].context_li1 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li1}</p></li>}
                            { prop[add].context_li2 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li2}</p></li>}
                            { prop[add].context_li3 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li3}</p></li>}
                            { prop[add].context_li4 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li4}</p></li>}
                            { prop[add].context_li5 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li5}</p></li>}
                            { prop[add].context_li6 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li6}</p></li>}
                            { prop[add].context_li7 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].context_li7}</p></li>}
                        </ul>}
                    </div> */}

                    { prop[add].price_text && 
                     <div className={styles.context__price_text}>
                        { prop[add].price_context &&  <p className={styles.context_text}>{prop[add].price_context}</p>}
                        { prop[add].price_context1 &&  <p className={styles.context_text}>{prop[add].price_context1}</p>}
                        { prop[add].price_context2 &&  <p className={styles.context_text}>{prop[add].price_context2}</p>}
                     </div>
                     }
                    </div>


{/* второй заголовок со списком */}


                    { prop[add].context_block && 
                    <div className={styles.context__block}>
                        { prop[add].block_copy && 
                        <div className={styles.context__price_title}>
                        <h2 className={styles.context__copy}>{prop[add].block_copy}</h2>
                    </div>
                        }

{/* второй список */}

                        { prop[add].price_ul && 
                        <div className={styles.context__price_ul}>
                        <ul className={styles.context__ul}>

                        { prop[add].price_li &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li}</p></li>}
                        { prop[add].price_li1 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li1}</p></li>}
                        { prop[add].price_li2 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li2}</p></li>}
                        { prop[add].price_li3 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li3}</p></li>}
                        { prop[add].price_li4 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li4}</p></li>}
                        { prop[add].price_li5 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li5}</p></li>}
                        { prop[add].price_li6 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li6}</p></li>}
                        { prop[add].price_li7 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].price_li7}</p></li>}
                        </ul>
                    </div>
                        }

                    </div>
                    }





{/* конец модального окна в виде текста */}

                 { prop[add].buttom_text && 
                 <div className={styles.context__block}>
                    <div className={styles.context__description}>
                    { prop[add].buttom_p && <p className={styles.context_text}>{prop[add].buttom_p}</p>}
                    { prop[add].buttom_p1 && <p className={styles.context_text}>{prop[add].buttom_p1}</p>}
                    { prop[add].buttom_p2 && <p className={styles.context_text}>{prop[add].buttom_p2}</p>}
                    { prop[add].buttom_p3 && <p className={styles.context_text}>{prop[add].buttom_p3}</p>}
                    { prop[add].buttom_p4 && <p className={styles.context_text}>{prop[add].buttom_p4}</p>}

                </div>
                </div>
                 }



{/* повторяющийся текст внизу с заголовком */}



{/* третий заголовок со списком */}


                    { prop[add].context_bottom && 
                    <div className={styles.context__block}>
                        { prop[add].block_bottom && 
                        <div className={styles.context__price_title}>
                        <h2 className={styles.context__copy}>{prop[add].block_bottom}</h2>
                    </div>
                        }

{/* третий список */}

                        { prop[add].price_roster && 
                        <div className={styles.context__price_ul}>
                        <ul className={styles.context__ul}>

                        { prop[add].roster_li &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li}</p></li>}
                        { prop[add].roster_li1 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li}</p></li>}
                        { prop[add].roster_li2 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li1}</p></li>}
                        { prop[add].roster_li3 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li2}</p></li>}
                        { prop[add].roster_li4 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li3}</p></li>}
                        { prop[add].roster_li5 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li4}</p></li>}
                        { prop[add].roster_li6 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li5}</p></li>}
                        { prop[add].roster_li7 &&  <li className={styles.context__li}><p className={styles.black}>{prop[add].roster_li6}</p></li>}
                        </ul>
                    </div>
                        }

                    </div>
                    }
                        

                </div>
            </div>
        </div>

    </div>
  )
}

export default WindowTwo