import styles from "./Picture.module.scss";
import React, { ReactNode } from "react";
import Button from "../components/Button";
interface Props {
    readonly picture: ReactNode;
    readonly date?: string;
    readonly header: string;
    readonly author: string;
}

const Picture: React.FunctionComponent<Props> = props => {
    const { picture, date, header, author } = props;
    return (
        <div className={styles.picture_container}>
            {picture}

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
export default Picture;
