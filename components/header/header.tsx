import styles from "./header.module.css";
import { ROUTER } from "@/router/router.enum";
import Link from "next/link";
import React from "react";

const header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.header_menu}>
        <Link className={styles.link} href={ROUTER.HOME}>
          <div className={styles.containrt_link}>
            <p>Home</p> <div className={styles.line}></div>
          </div>
        </Link>
        <Link className={styles.link} href={ROUTER.CARDS}>
          <div className={styles.containrt_link}>
            <p>Cards</p> <div className={styles.line}></div>
          </div>
        </Link>
      </div>
      <h1 className={styles.H1}>Marvel Heroes</h1>
    </div>
  );
};

export default header;
