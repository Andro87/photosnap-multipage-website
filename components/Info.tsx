import styles from "./Info.module.scss";
import React, { ReactNode } from "react";

interface Props {
    readonly info: string;
    readonly basic?: ReactNode;
    readonly pro?: ReactNode;
    readonly business?: ReactNode;
}

const Info: React.FunctionComponent<Props> = props => {
    const { info, basic, pro, business } = props;
    return (
        <div className={styles.info_header}>
            <p>{info}</p>
            <div className={styles.header_mobile}>
                <p>BASIC</p>
                <p>PRO</p>
                <p>BUSINESS</p>
            </div>
            <div className={styles.check__wrap}>
                <div className={styles.check}>{basic}</div>
                <div className={styles.check}>{pro}</div>
                <div className={styles.check}>{business}</div>
            </div>
        </div>
    );
};
export default Info;
