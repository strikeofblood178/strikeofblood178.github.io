import cn from 'clsx';
import Button from '../../UI/Button/Button';
import styles from './Logout.module.css';

const Logout = ({can, cont}) => {
  return (
    <div className={styles.section}>
        <div className={styles.new}>
        <h1 className={styles.title}>Отправьте заявку</h1>
        <h3 className={styles.text}>Мы свяжемся с Вами в ближайшее время</h3>
        </div>
        <input className={cn(styles.text, styles.inputText)}  type="text" placeholder='Имя' />
        <input className={cn(styles.text, styles.inputText)} type="text" placeholder='Телефон' />
        <textarea className={cn(styles.text, styles.inputTexteria)} name="" id="" cols="30" rows="10" placeholder='Комментарий'></textarea>
        <label className={styles.label}>
            <input className={styles} type="checkbox" />
            <span className={styles.checkboxText}>Отправляя заявку Вы соглашаетесь на обработку персональных данных</span>
        </label>

        <Button type="big" click={cont} >Отправить заявку</Button>
        <div onClick={can} className={cn(styles.cross, 'icon-cross' )}></div>
        {/* <Button type="big" click={can} >Закрыть</Button> */}
    </div>
  )
}

export default Logout