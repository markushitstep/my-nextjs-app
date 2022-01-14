import Link from "next/link"
import Head from 'next/head'

export default function Index() {
    return <>
        <Head>
            <title>Learn next.js </title>
            <meta name="keywords" content="Learn next.js" />
            <meta name="description" content="Learn next.js" />
            <meta charSet="utf-8" />
        </Head>
        <h1>Hello Next.JS!</h1>
        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href='/posts'><a>Posts</a></Link></p>
    </>
}