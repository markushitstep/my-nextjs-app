import Router from 'next/router'

export default function about() {

    const linkClickHandler = () => {
        Router.push('/posts');
    }

    return (
        <>
            <h1>About</h1>
            <button onClick={linkClickHandler}>Go to posts </button>
            <button onClick={() => Router.push('/')}>Go back to home</button>
        </>
    )
}