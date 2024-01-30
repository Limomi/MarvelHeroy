import Image from "next/image";
import her_img from "./../img/herois_img_main.png"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.txt}>
        <div className={styles.txt_h}>
          <b>Find </b> all your favorite
          <b> Character</b>
        </div>
        <div className={styles.lit_txt_main}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
        <button className={styles.Button_main}>See Character</button>
      </div>
      <div className={styles.mainImg}>
        <Image src={her_img} alt="Herors" />
      </div>
    </main>
  );
}
