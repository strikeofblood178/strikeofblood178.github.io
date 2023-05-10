import cn from 'clsx';
import BackDrop from '../BackDrop/BackDrop';
import styles from './Modal.module.css';

const Modal = ({children, isVissible, close}) => {
  return (
    <div className={styles.center}>
    <BackDrop isVisible={isVissible} close={close}/>
    <div className={cn(styles.modal, isVissible && styles.show)}>
        {children}
    </div>
    </div>
  );
};

export default Modal;