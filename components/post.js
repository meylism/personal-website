import DateComponent from '../components/date'
import Link from 'next/link'
import styles from '../styles/Post.module.scss'

export default function Post({slug, title, date, description}) {
    return (
        <div className={styles.post}>
            <h2><Link href={`/blog/${slug}`}>{title}</Link></h2>
            <div className={styles.post__date}>
                <DateComponent dateString={date}/>
            </div>
            <p>{description}</p>
        </div>
    )
}