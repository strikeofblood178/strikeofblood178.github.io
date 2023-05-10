import cn from 'clsx';
import styles from './Certificate.module.css';

const Certificate = () => {
  return (
    <div className={styles.select}>
        <div className={styles.block}>
        <div className={cn(styles.block_one, styles.one)}>
            <img className={styles.img} src={`img/${"certificat"}.png`} alt="" />
        </div>


        <div className={styles.block_two}>
            <div className={styles.title}>
                <h1 className={styles.title_h1}>
                Сертификат в дизайнерском конверте
                </h1>
                </div>
                
        <div className={cn(styles.block_one, styles.none)}>
            <img className={styles.img} src={`img/${"certificat"}.png`} alt="" />
        </div>

            <div className={styles.text}>
                <ul className={styles.ul}>
                    <li className={styles.li}>Электронный сертификат - бесплатный</li>
                    <li className={styles.li}>Сертификат в подарочном конверте - 200р</li>
                    <li className={styles.li}>Срок действия сертификата - 3 месяца</li>
                    <li className={styles.li}>Бесплатная доставка в день заказа</li>
                    <li className={styles.li}>Есть возможность заменить впечатление по сертификату, если подарок не понравится</li>
                </ul> 
            </div>
        </div>
        </div>
    </div>
  )
}

export default Certificate