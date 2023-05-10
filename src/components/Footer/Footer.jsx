import cn from 'clsx';
import Button from '../UI/Button/Button';
import styles from './Footer.module.css';

const Footer = ({vis}) => {
  return (
    <div id='Footer' className={styles.section}>
        {/* <hr className={styles.hare}/> */}
        <div className={styles.hare}></div>
                
        <div className={styles.block}>
            <div className={styles.logo}>
                <a href="#"><img className={styles.logo_img} src={`img/${"dari"}.png`} alt="" /></a>
                <p className={styles.logo_text}>Все права защищиены © Дари Душой, 2022 г.</p>
            </div>
            <div className={styles.nav}>
                <a className={styles.link} href="#"><h1>Меню</h1></a>
                <a className={styles.link} href="#Controls"><h3>Каталог</h3></a>
                <a className={styles.link} href="#SliderTwo"><h3>Акции</h3></a>
                <a className={styles.link} href="#Footer"><h3>Контакты</h3></a>
            </div>
            <div className={styles.network}>
                <a className={styles.network_link} href="tel:+380441234567">+7 (999) 123-45-67</a>
                <a target="_blank" href="https://github.com/strikeofblood178/react-ex"><div className={cn(styles.network_icon, 'icon-vk')}></div></a>
                <a target="_blank" href="https://www.youtube.com/watch?v=AtR40o6bi3U"><div className={cn(styles.network_icon, 'icon-twitter')}></div></a>
            </div>
            <div className={styles.questions}>
                <h1 className={styles.questions_title}>Остались вопросы?</h1>
                <p className={styles.questions_text}>Оставьте заявку, мы свяжемся с Вамив ближайшее время</p>
                <div className={styles.width}><Button click={vis} type="small">Оставить заявку</Button></div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer