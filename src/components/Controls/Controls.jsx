import { ControlItem } from './ControlItem/ControlItem';
import styles from './Controls.module.css';

export const Controls = ({slider, add, remove, ordered, go}) => {
  return (
    <div id='Controls' className={styles.controls}>
        <h1 className={styles.title}>Каталог впечатлений</h1>
        {/* <button onClick={ordered}>button</button> */}
        <div className={styles.box}>
            {
                Object.keys(slider).map((type) =>{
                    return  <ControlItem 
                    key={type} 
                    type={type} 
                    title={slider[type].name} 
                    count={slider[type].count} 
                    button={slider[type].button} 
                    text={slider[type].text} 
                    ot={slider[type].ot}
                    stock={slider[type].stock}
                    stoking={slider[type].stoking}
                    add={() => add(type)}
                    remove={(event) => remove(type, event)}
                    ordered={() => ordered(type)}
                    go={go}
                    />
                })
            }
        </div>
    </div>
  )
}
