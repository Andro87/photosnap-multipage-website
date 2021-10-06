import styles from "./Price.module.scss";
import React from "react";

interface Props {
    readonly header: string;
    readonly paragraph: string;
    readonly price: string;
    readonly period: string;
    readonly dark?: string;
    readonly btn_white?: string;
    readonly white?: string;
    readonly light?: string;
}

const Price: React.FunctionComponent<Props> = props => {
    const { header, paragraph, price, period, dark, btn_white } = props;
    return (
        <div className={`${styles.price_box} ${styles[dark]}`}>
            <h3> {header}</h3>
            <p>{paragraph}</p>
            <div className={styles.offer_wrap}>
                <p className={styles.price}>{price}</p>
                <p>{period}</p>
            </div>

            <button
                type="button"
                aria-label="pick a plan"
                className={`${styles.btn} ${styles[btn_white]}`}
            >
                PICK PLAN
            </button>
        </div>
    );
};
export default Price;
