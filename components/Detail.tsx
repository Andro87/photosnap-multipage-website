import styles from "./Detail.module.scss";
import React, { ReactNode } from "react";
import Button from "./Button";
interface Props {
    readonly desktop: string;
    readonly tablet: string;
    readonly mobile: string;
    readonly header: string;
    readonly paragraph: string;

    readonly order?: string;
}

const Detail: React.FunctionComponent<Props> = props => {
    const { desktop, tablet, mobile, header, paragraph, order } = props;
    const desktopSize = 1180;
    const tabletSize = 720;
    return (
        <div className={`${styles.detail} ${styles[order]}`}>
            <div className={styles.detail_img}>
                <picture>
                    <source
                        srcSet={desktop}
                        media={`(min-width:${desktopSize}px)`}
                    />
                    <source
                        srcSet={tablet}
                        media={`(min-width:${tabletSize}px)`}
                    />
                    <img src={mobile} alt="" />
                </picture>
            </div>

            <div className={styles.detail_info}>
                <div className={styles.info_wrap}>
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
                    <Button
                        title="VIEW THE STORIES"
                        color="black"
                        space="detail"
                    />
                </div>
            </div>
        </div>
    );
};
export default Detail;
