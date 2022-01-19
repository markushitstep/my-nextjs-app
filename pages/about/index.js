import Router from 'next/router'
import MainLayout from "../../components/MainLayout"

export default function About({ title }) {

    const linkClickHandler = () => {
        Router.push('/posts');
    }

    return (
        <MainLayout title={"About page"}>
            <h1>{ title }</h1>
            <button onClick={linkClickHandler}>Go to posts </button>
            <button onClick={() => Router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}

About.getInitialProps = async ({}) =>{
    const respose = await fetch("http://localhost:4200/about");
    const data = await respose.json();

    return { title: data.title }
}