import Head from "next/head";
import MainLayout from "../components/MainLayout"

export default function posts() {
    return (
        <MainLayout title={"Posts page"}>
            <h1>Posts Page</h1>
            <p>lorem ipsum dolor sit amet</p>
        </MainLayout>
    )
}

