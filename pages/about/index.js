import Router from 'next/router'
import MainLayout from "../../components/MainLayout"

export default function about() {

    const linkClickHandler = () => {
        Router.push('/posts');
    }

    return (
        <MainLayout title={"About page"}>
            <h1>About</h1>
            <button onClick={linkClickHandler}>Go to posts </button>
            <button onClick={() => Router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}