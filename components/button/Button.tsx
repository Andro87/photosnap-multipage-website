import styles from "./Button.module.scss";
import React from "react";

interface Props {
    readonly title: string;
    readonly color: string;
    readonly space: string;
    readonly arrow?: string;
    readonly position?: string;
}

export const Button: React.FunctionComponent<Props> = props => {
    const { title, color, space, arrow, position } = props;
    return (
        <div className={`${styles.btn_wrap} ${styles[position]} `}>
            <button
                type="button"
                aria-label="button"
                className={`${styles.btn} ${styles[color]}`}
            >
                {title}
            </button>
            <svg
                className={`${styles[space]} ${styles[arrow]}`}
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="14"
            >
                <g fill="none" fillRule="evenodd" stroke="#111">
                    <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
            </svg>
        </div>
    );
};
