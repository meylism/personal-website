import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.scss'

export default function Layout({children, home, post}) {
    return (
        <>
        <Head>
            <title>Blog</title>
            <link rel="icon" href="/favicon.ico"/>
            <meta
                name="description"
                content="Personal blog."
            />
        </Head>
            <header className={styles.header}>
                <nav>
                    <Link href="/">About</Link> 
                    <Link href="/blog">Blog</Link>
                </nav>
                <div className={styles.linkContainer}>
                    <ul className={styles.linkContainer__link}>
                        <li>
                            <a href="/docs/cv.pdf" target="_black" title="Curriculum Vitae">
                                <img src="/icons/cv.svg" alt="CV" className={styles.linkContainer__logo}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/meylis-matiyev/" target="_black" title="LinkedIn">
                                <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.linkContainer__logo}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/meylism" target="_black" title="GitHub">
                                <img src="/icons/github.svg" alt="GitHub" className={styles.linkContainer__logo}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className={styles.mainContainer}>
                <main>{children}</main>
                {post ?
                <>
                    <Link href="/blog"><a className={styles.mainContainer__linkBack}><span>&#10145;</span>Back</a></Link>
                </> : <></>  
                }
                <footer className={styles.footer}>
                    <div className={styles.footer__things}>
                        <span>
                            Icons by <a href="https://simpleicons.org/">Simple Icons</a>
                        </span>
                    </div>
                </footer>
            </div>
        </>
        
    )
}