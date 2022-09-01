import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Hero from '../components/Hero'
import Button from '../components/Button'
import Quote from '../components/Quote'
import Itinerary from '../components/Itinerary'
import { server } from '../config';


type PathProps = { locale: string }

export const getStaticProps = async ({ locale } : PathProps) => {
  const itinerary = await fetch(`${server}/locales/${locale}/itinerary.json`).then(res => res.json()); 

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      weddingDate: new Date('2022-10-08').toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' }),
      itinerary
    }
  }
};

function Home({ weddingDate, itinerary } : InferGetStaticPropsType<typeof getStaticProps>) {

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
                rel="noopener"
              >
                {t('rsvpVerb')}
              </Button>

              <span style={{ fontSize: '0.75em', fontStyle: 'italic' }}>
                {` ${t('rsvpDeadline')} `}
              </span>
              </>
          }}
        </Hero>
        <Quote
          url="https://www.literatura.lv/en/work/Motocikls/408336"
          author="Imants Ziedonis"
          source="Motocikls (1965)"
        >
          <p>{t('quote')}</p>
        </Quote>

        <Itinerary itinerary={ itinerary }></Itinerary>
        
      </main>

      <footer className={styles.footer}>
        {t('moreSoon')} ❤ <em>{t('brideAndGroom')}</em>
      </footer>
    </>
  )
}

export default Home
