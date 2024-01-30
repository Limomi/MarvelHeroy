import style from "./cardItem.module.css"
import theBestheroy from "./../../img/heroi.png"
import Image from "next/image";

const cardItem =() => {
    return(
        <div className={style.cardFi}>
            <Image src={theBestheroy} alt="3d_man" className = {style.herImg}/>
            <div className={style.her_name}>3-D Man</div>
        </div>
    )
}

export default cardItem