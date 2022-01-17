import Link from "next/link";
import MainLayout from "../components/MainLayout";
import styles from "../styles/404.module.css"

export default function ErrorPage() {
    return (
        <MainLayout>
            <h1 className={styles.error}>Error 404</h1>
            <p> Please <Link href={"/"}><a>go back</a></Link> to safety</p>
        </MainLayout>
    )
}