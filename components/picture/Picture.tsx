import styles from "./Picture.module.scss";
import React from "react";
import { Button } from "components";
interface Props {
    readonly desktop: string;
    readonly mobile: string;
    readonly date?: string;
    readonly header: string;
    readonly author: string;
}

export const Picture: React.FunctionComponent<Props> = props => {
    const { desktop, mobile, date, header, author } = props;
    const desktopSize = 1180;
    return (
        <div className={styles.picture_container}>
            <picture>
                <source
                    srcSet={desktop}
                    media={`(min-width:${desktopSize}px)`}
                />
                <img src={mobile} alt="" />
            </picture>

            <div className={styles.picture_info}>
                <p>{date}</p>
                <h3> {header}</h3>
                <p> {author}</p>
                <hr className={styles.line} />

                <Button
                    title="READ STORY"
                    color="white"
                    space="story"
                    arrow="white_arrow"
                />
            </div>
        </div>
    );
};
