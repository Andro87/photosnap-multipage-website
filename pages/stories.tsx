import Head from "next/head";
import styles from "../styles/Stories.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Picture from "../components/Picture";
import { pictures } from "../data/pictureStories";
export default function Stories() {
    return (
        <div className={styles.main_container}>
            <Head>
                <title>
                    Frontend Mentor | Photosnap Website Challenge |Stories
                </title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/assets/favicon-32x32.png" />
            </Head>
            <Header />

            <main className={styles.main}>
                <div className={styles.main_img}>
                    <img
                        src="/assets/stories/mobile/moon-of-appalacia.jpg"
                        alt=""
                    />
                </div>

                <div className={styles.main_info}>
                    <p className={styles.size}>
                        LAST MONTH &apos; S FEATURED STORY
                    </p>
                    <h1> HAZY FULL MOON OF APPALACHIA</h1>
                    <p className={styles.size}>
                        <span>March 2nd 2020 </span> by John Appleseed
                    </p>
                    <p className={styles.paragraph}>
                        The dissected plateau area, while not actually made up
                        of geological mountains, is popularly called
                        &quot;mountains,&quot; especially in eastern Kentucky
                        and West Virginia, and while the ridges are not high,
                        the terrain is extremely rugged.
                    </p>

                    <Button
                        title="READ THE STORY"
                        color="white"
                        space="main"
                        arrow="white_arrow"
                    />
                </div>
            </main>

            <section
                className={styles.section_pictures}
                aria-label="stories pictures"
            >
                {pictures.map((picture, index) => (
                    <Picture
                        key={index}
                        desktop={picture.picture.desktop}
                        mobile={picture.picture.mobile}
                        header={picture.header}
                        author={picture.author}
                        date={picture.date}
                    />
                ))}
            </section>
            <Footer />
        </div>
    );
}
