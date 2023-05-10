import Accordion from 'react-bootstrap/Accordion';
import styles from './Acordion.module.css';

const Acordion = () => {
  return (
    <div className={styles.container}>
        
        <h1 className={styles.title}>Часто задаваемые вопросы</h1>

        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><h2 className={styles.text}>Могу ли я купить сертификат в подарок?</h2></Accordion.Header>
        <Accordion.Body>
          <h4>Да, конечно можете.</h4>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header><h2 className={styles.text}>Могу ли я поменять сертификат на другой?</h2></Accordion.Header>
        <Accordion.Body>
          <h4> Да можете, если его срок действия не вышел.</h4>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header><h2 className={styles.text}>Могу ли я купить сертификат в подарок?</h2></Accordion.Header>
        <Accordion.Body>
          <h4>Срок действия 3 месяца.</h4>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header><h2 className={styles.text}>Могу ли я поменять сертификат на другой?</h2></Accordion.Header>
        <Accordion.Body>
          <h4>Да можете, но это будет стоить дороже.</h4>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header><h2 className={styles.text}>Могу ли я купить сертификат в подарок?</h2></Accordion.Header>
        <Accordion.Body>
          <h4>Нет, вы можете поменять его на другой.</h4>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

    </div>
  )
}

export default Acordion