import Head from "next/head";
import Link from "next/link";
import styles from "../styles/MainLayout.module.css";

export default function MainLayout({ children, title = 'Next App'}) {
    return (
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="Learn next.js" />
                <meta name="description" content="Learn next.js" />
                <meta charSet="utf-8" />
            </Head>
            <nav className={styles.nav}>
                <Link href="/"><a>Home</a></Link> 
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>          
            </nav>
            <main className={styles.main}>
                {
                    children
                }
            </main>
        </>
    )
}