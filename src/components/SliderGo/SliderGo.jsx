import cn from 'clsx';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from './SliderGo.module.css';

const SliderGo = ({vis}) => {
  return (
    <div className={styles.container}>


<div className={styles.hare}></div>


        <Carousel>


        <CarouselItem>
        <img className='d-block w-100' src={`img/${"Rectangle"}.png`} alt="" />
      <Carousel.Caption>
        <div className={styles.block}>
            <div className={styles.price}>от 990 ₽</div>
            <h1 className={styles.title}>Конная прогулка</h1>
            <div className={styles.btn_div}>
                <button onClick={vis}  className={styles.btn}>Заказать впечатление</button>
                </div>
        </div>
      </Carousel.Caption>
      </CarouselItem>

      <CarouselItem>
        <img className='d-block w-100' src={`img/${"Rectangle1"}.png`} alt="" />
      <Carousel.Caption>
         <div className={styles.block}>
            <div className={styles.price}>от 3 500 ₽</div>
            <h1 className={styles.title}>Прогулка на яхте «Чайка»</h1>
            <div className={styles.btn_div}>
                <button onClick={vis} className={styles.btn}>Заказать впечатление</button>
                </div>
        </div>
      </Carousel.Caption>
      </CarouselItem>

      <CarouselItem>
        <img className='d-block w-100' src={`img/${"Rectangle2"}.png`} alt="" />
      <Carousel.Caption>
        <div className={styles.block}>
            <div className={styles.price}>от 3 000 ₽</div>
            <h1 className={styles.title}>Вечер в куполе</h1>
            <div className={styles.btn_div}>
                <button onClick={vis} className={styles.btn}>Заказать впечатление</button>
                </div>
        </div>
      </Carousel.Caption>
      </CarouselItem>


     </Carousel>

    </div>
  )
}

export default SliderGo