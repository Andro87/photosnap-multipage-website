import styles from "./Header.module.scss";
import React from "react";
import { useState } from "react";
import Logo from "../svg/logo.svg";
import Menu from "../svg/menu.svg";
import Close from "../svg/close.svg";
import Link from "next/link";
const Header: React.FunctionComponent = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className={styles.header}>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
            <button
                type="button"
                aria-label="menu mobile"
                className={styles.btn_mobile}
                onClick={() => setOpen(!open)}
            >
                {!open ? <Menu /> : <Close />}
            </button>

            <nav
                className={`${styles.navigation} ${
                    open ? styles.navigation_mobile : null
                }`}
            >
                <div className={styles.link_wrap}>
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
                <hr className={styles.break_line} />
                <button
                    type="button"
                    aria-label="button"
                    className={styles.btn}
                >
                    GET AN INVITE
                </button>
            </nav>
        </header>
    );
};
export default Header;
