import styles from "./cards.module.css"
import CardItem from "./../../components/cardItem/cardItem"

const cards = () => {
    return (  
        <div>
            <div className = {styles.h2_cards}>
                Marvel characters
            </div>
            <div className={styles.findFild_div}><input type="text" placeholder="Find" className={styles.findFild}/></div>
            
            <div className={styles.cardsField}>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
        </div>
        
    );
}
 
export default cards;