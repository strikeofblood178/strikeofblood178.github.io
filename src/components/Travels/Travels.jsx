import { Grid } from './Grid/Grid';
import styles from './Travels.module.css';

const Travels = ({slider}) => {
    const inGrid = [];

    Object.keys(slider).forEach((type) =>{
        if(slider[type].count){
            inGrid.push(<Grid key={type} type={type} />);
        }
    });

  return (
    <div className={styles.title}>
        {inGrid}
    </div>
  )
}

export default Travels