import styles from "./Beta.module.scss";
import React from "react";

import Button from "../components/Button";

const Beta: React.FunctionComponent = () => {
    return (
        <section className={styles.section_invite} aria-label="get an invite">
            <div className={styles.invite_info}>
                <div className={styles.invite_wrap}>
                    <h2> WE&apos;RE IN BETA. GET YOUR INVITE TODAY!</h2>

                    <Button
                        title="GET AN INVITE"
                        color="white"
                        space="main"
                        arrow="white_arrow"
                    />
                </div>
            </div>
        </section>
    );
};
export default Beta;
