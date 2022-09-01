import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Quote from '../components/Quote'

type PathProps = { locale: string }

export const getStaticProps = async ({ locale } : PathProps) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
    weddingDate: new Date('2022-10-08').toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' }),
    rsvpDeadline: new Date('2022-09-17').toLocaleDateString(locale, { month: 'long', day: 'numeric' }),
  },
})

function Home({ weddingDate, rsvpDeadline } : InferGetStaticPropsType<typeof getStaticProps>) {

  const { locale } = useRouter();

  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero
          background="/images/sigulda-castle.jpg"
          backgroundColor="tertiary"
          color="white"
        >
          {{
            heading: t('brideAndGroom'),
            subheading: <>{weddingDate} &bull; Sigulda</>,
            cta:
              <>
              <Button
                style={{ fontSize: '1.85em' }}
                backgroundColor="primary"
                href="https://forms.gle/qHFxkTFkQK1McYyKA"
                target="_blank"
              >
                {t('rsvpVerb')}
              </Button>

              <span style={{ fontSize: '0.75em', fontStyle: 'italic' }}>
                {t('rsvpVerb')} {` ${t('rsvpUntil')} ${rsvpDeadline} `}
              </span>
              </>
          }}
        </Hero>
        <Quote
          url="https://www.literatura.lv/en/work/Motocikls/408336"
          author="Imants Ziedonis"
          source="Motocikls"
        >
          <p>Ar tevi kopā ik vietu es saucu par savām mājām</p>
        </Quote>
        
      </main>

      <footer className={styles.footer}>
        {t('moreSoon')} ❤ <em>{t('brideAndGroom')}</em>
      </footer>
    </>
  )
}

export default Home
