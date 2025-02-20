import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Layout.module.scss'

export default function Layout({children, home, post}) {
    return (
        <>
        <Head>
            <title>Blog</title>
            <link rel="icon" href="/static/favicon.ico"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-42W67DYZER"></script>
            <script dangerouslySetInnerHTML={{__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    dataLayer.push(arguments) 
                }
                gtag("js", new Date());
                gtag("config", "G-42W67DYZER");
            `}}>
            </script>
        </Head>
            <header className={styles.header}>
                <nav>
                    <Link href="/">About</Link> 
                    <Link href="/blog">Blog</Link>
                </nav>
                <div className={styles.linkContainer}>
                    <ul className={styles.linkContainer__link}>
                        <li>
                            <a href="https://www.linkedin.com/in/meylism" target="_black" title="LinkedIn">
                                <img src="/static/icons/linkedin.svg" alt="LinkedIn" className={styles.linkContainer__logo}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/meylism" target="_black" title="GitHub">
                                <img src="/static/icons/github.svg" alt="GitHub" className={styles.linkContainer__logo}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className={styles.mainContainer}>
                <main>{children}</main>
                {post ?
                <>
                    <Link href="/blog">
                            <a className={styles.mainContainer__linkBack}><span>&#10145;</span>Back</a>
                    </Link>
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