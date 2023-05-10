import styles from './Example.module.css';



const Example = ({prop, add}) => {
  return (
    <div className={styles.block}>
        <h1>hhhhh</h1>
        <h1>{add}</h1>

      { Object.keys(prop).map((add) =>{
       })}

        <h1>{prop[add].name}</h1>


    </div>
  )
}

export default Example