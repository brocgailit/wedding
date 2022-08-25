import type { NextPage, GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

type PathProps = { locale: string }

export const getStaticProps = async ({ locale } : PathProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
    weddingDate: new Date('2022-10-08').toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' })
  },
})

function Home({ weddingDate } : InferGetStaticPropsType<typeof getStaticProps>) {

  const { locale } = useRouter();

  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('brideAndGroom')}
        </h1>
        <h2>
          {weddingDate}
        </h2>
      </main>

      <footer className={styles.footer}>
        Made with ♥ 
      </footer>
    </div>
  )
}

export default Home
