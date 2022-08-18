import styles from "./Footer.module.scss";
import React from "react";
import Link from "next/link";
import Logo from "svg/logo.svg";
import Facebook from "svg/facebook.svg";
import Youtube from "svg/youtube.svg";
import Twitter from "svg/twitter.svg";
import Pinterest from "svg/pinterest.svg";
import Instagram from "svg/instagram.svg";
import { Button } from "components";
export const Footer: React.FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_wrap}>
                <div className={styles.contact_wrap}>
                    <Logo />
                    <div className={styles.social}>
                        <Facebook />
                        <Youtube />
                        <Twitter />
                        <Pinterest />
                        <Instagram />
                    </div>
                    <div className={styles.link}>
                        <Link href="/">
                            <a>HOME</a>
                        </Link>
                        <Link href="/stories">
                            <a>STORIES</a>
                        </Link>
                        <Link href="/features">
                            <a>FEATURES</a>
                        </Link>
                        <Link href="/pricing">
                            <a>PRICING</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <Button
                        title="GET AN INVITE"
                        color="white"
                        space="footer"
                        position="footer_position"
                        arrow="white_arrow"
                    />
                    <p>Copyright 2019. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
