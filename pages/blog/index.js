import Head from 'next/head'
import Layout from '../../components/layout'
import Postt from '../../components/post'
import { getSortedPosts } from '../../lib/posts'
import styles from '../../styles/Blog.module.scss'

export default function Blog({posts}) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Meylis Matiyev's personal blog."/>
        <meta name="author" content="Meylis Matiyev"/>
      </Head>

      <section className={styles.postFeed}>
        <ul>
        {posts.map((post) => (
          <li key={post.slug}>
          <Postt 
            slug={post.slug} 
            title={post.title} 
            date={post.date} 
            description={post.description}
          />
          </li>
          )
        )}</ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getSortedPosts()
  return {
    props: {
      posts
    }
  } 
}