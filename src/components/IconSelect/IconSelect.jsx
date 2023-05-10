import cn from 'clsx';
import styles from './IconSelect.module.css';

const IconSelect = () => {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
        <div className={styles.block}>
            <a href="#"> <img className={styles.img} src={`img/${"prototype"}.png`} alt="" /></a>
            <h1 className={styles.title}>Впечатления по цене партнёра</h1>
        </div>
        <div className={styles.block}>
            <a href="#"><img className={styles.img} src={`img/${"prototype1"}.png`} alt="" /></a>
            <h1 className={styles.title}>Бесплатная доставка в день заказа</h1>
        </div>
        <div className={styles.block}>
            <a href="#"><img className={styles.img} src={`img/${"prototype2"}.png`} alt="" /></a>
            <h1 className={styles.title}>Красивые сертификаты на любое впечатление</h1>
        </div>
        <div className={styles.block}>
            <a  href="#"><img className={styles.img} src={`img/${"prototype3"}.png`} alt="" /></a>
            <h1 className={styles.title}>Проверенные партнёры</h1>
        </div>
        </div>
    </div>
  )
}

export default IconSelect