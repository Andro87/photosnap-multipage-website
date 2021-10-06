import styles from "./Detail.module.scss";
import React, { ReactNode } from "react";

interface Props {
    readonly picture: ReactNode;
    readonly header: string;
    readonly paragraph: string;
    readonly button: ReactNode;
    readonly order?: string;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { picture, header, paragraph, button, order } = props;
    return (
        <div className={`${styles.detail} ${styles[order]}`}>
            <div className={styles.detail_img}>{picture}</div>

            <div className={styles.detail_info}>
                <div className={styles.info_wrap}>
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                    {button}
                </div>
            </div>
        </div>
    );
};
export default Detail;
