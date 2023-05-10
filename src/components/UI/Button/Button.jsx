import styles from './Button.module.css';
import cn from 'clsx';

const Button = ({children, click, type}) => {
  return (
    <button className={cn(styles.btn, type && styles[type])} onClick={click}>{children}</button>
  )
}

export default Button