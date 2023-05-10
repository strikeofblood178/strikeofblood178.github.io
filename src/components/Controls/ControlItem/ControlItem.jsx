import styles from './ControlItem.module.css';

export const ControlItem = ({type, title, count, button, text, ot, stock, stoking, add, remove, ordered, go}) => {
  return (
    <div className={styles.controlItem }>
        <div>
        <img className={styles.image} src={`img/${type}.png`} alt={title} />
        {stoking > 0 && <div className={styles.stock}>{stock}</div>}
        </div>
        <div className={styles.center}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.just}>
            <p className={styles.count}>{ot} {count} ₽</p>
            <div onClick={add}>
            <button id='21' onClick={ordered} className={styles.button}>{button}</button>
            </div>
            <p onClick={go} className={styles.text} >{text}</p>
            </div>
        </div>
    </div>
  );
};





// Кнопки позволяющие увеличивать и уменьшать цену

{/* <button className={styles.button} onClick={add}>{button}</button>
<p className={styles.text} onClick={remove} href="">{text}</p>


{ <a type='submit' className={styles.text} onClick={remove} href="">{text}</a> } */}