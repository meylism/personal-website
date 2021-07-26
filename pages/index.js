import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import { imagePrefixer } from '../lib/utils'

export default function Home() {
  return (
  <Layout home>
  <Head>
    <title>Meylis Matiyev</title>
    <meta name="description" content="Meylis Matiyev's personal website. I write about things that I find interesting."/>
    <meta name="author" content="Meylis Matiyev"/>
  </Head>

  <div className={styles.container}>
    <div className={styles.header}>
        <div className={styles.header__aboutMe}>
            <h1 className={styles.header__name}>Meylis Matiyev</h1>
            <div className={styles.header__info}>
                <p className={styles.header__major}>Undergraduate student, University of Pécs</p>
            </div>
        </div>
        <div>
            <img src={`${imagePrefixer()}/static/pictures/profile.jpg`} alt="Meylis Matiyev" className={styles.profilePhoto}/>
        </div>
    </div>
    <div className={styles.main}>
        <div className={styles.main__content}>
            <p>
            Hello! I am currently a second-year Computer Science Engineering student at the <a
                href="https://english.mik.pte.hu/">University of Pécs</a>, Hungary.
            My interests lie within the field of Big data technologies and databases.
            Now, I am very much looking forward to an internship offer. Thank you!
            </p>
        </div>
        <div className={styles.main__content}>
            <h2 className={styles.main__header}>Work Experience</h2>
            <ul className={styles.main__experience}>
                <li>
                    <div>
                        <h3 className={styles.main__actName}>Undergraduate Teaching Assistant</h3>
                        <p className={styles.main__actDuration}>Sep 2020 - Jan 2021</p>
                        <p className={styles.main__actPlace}>University of Pécs</p>
                        <p className={styles.main__actDescription}>I took part in a research project related to Biomedical
                            Engineering. My job included writing software for the
                            project using Python and Qt.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div className={styles.main__content}>
            <h2 className={styles.main__header}>Honors & Awards</h2>
            <ul className={styles.main__awards}>
                <li>
                    <div>
                        <h3 className={styles.main__awName}>Undergraduate Teaching Assistant Scholarship</h3>
                        <p className={styles.main__awDate}>Sep 2020</p>
                        <p className={styles.main__awBy}>University of Pécs</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 className={styles.main__awName}>Scholarship for Excellence</h3>
                        <p className={styles.main__awDate}>Sep 2019</p>
                        <p className={styles.main__awBy}>University of Pécs</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 className={styles.main__awName}>Stipendium Hungaricum Scholarship</h3>
                        <p className={styles.main__awDate}>June 2019</p>
                        <p className={styles.main__awBy}>Tempus Public Foundation</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 className={styles.main__awName}>Infomatrix Project Competition – Bronze
                            medal
                        </h3>
                        <p className={styles.main__awDate}>Apr 2019</p>
                        <p className={styles.main__awBy}>Lumina Educational Institutions Foundation (Bucharest,
                            Romania)
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 className={styles.main__awName}>Hong Kong Student Science Project
                            Competition – Bronze medal
                        </h3>
                        <p className={styles.main__awDate}>Mar 2018</p>
                        <p className={styles.main__awBy}>The Hong Kong Federation of Youth Groups (Hong
                            Kong)</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h3 className={styles.main__awName}>Olympiad in Informatics across Ashgabat City – 3rd place
                        </h3>
                        <p className={styles.main__awDate}>Jan 2018, Jan 2019</p>
                        <p className={styles.main__awBy}>Ministry of Education of Turkmenistan</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</Layout>
  )
}