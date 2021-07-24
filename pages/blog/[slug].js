import Head from "next/head";
import Layout from "../../components/layout";
import DateComponent from '../../components/date'
import { getPostSlugs, getPostData } from "../../lib/posts";
import styles from '../../styles/PostPage.module.scss'

export default function Post({postData}) {
    return (
    <Layout post>
        <Head>
            <title>{postData.title}</title>
            <meta name="description" content={postData.description}/>
        </Head>

        <section className={styles.post}>
            <header className={styles.post__header}>
                <h1>{postData.title}</h1>
                <span>Posted on <DateComponent dateString={postData.date}/></span>
            </header>
            <article>
                <div dangerouslySetInnerHTML={{__html: postData.htmlData}}/>
            </article>
        </section>
    </Layout>
    )
}

export async function getStaticPaths() {
    const slugs = getPostSlugs()
    return {
        paths: slugs,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.slug)
    return {
        props: {
            postData
        }
    }
}