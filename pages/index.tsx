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

import itinerary from '../public/locales/itinerary.json';
import Attendants from '../components/Attendants'
import Contact from '../components/Contact'

type PathProps = { locale: string }

export const getStaticProps = async ({ locale } : PathProps) => {

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      weddingDate: new Date('2022-10-08').toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' }),
      itinerary: itinerary[locale as keyof typeof itinerary]
    }
  }
};

function Home({ weddingDate, itinerary } : InferGetStaticPropsType<typeof getStaticProps>) {

  // const { locale } = useRouter();

  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('title')} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
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

        <Attendants title={t('attendantsTitle')} names={t('attendants')}></Attendants>

        <Contact
          dayOfContact={{
            description: t('contactDayOfDescription'),
            persons: [{
              name: t('contactDayOfName'),
              phone: t('contactDayOfPhone')
            }]
          }}
          persons={[
            {
              name: t('contact1Name'),
              phone: t('contact1Phone')
            },
            {
              name: t('contact2Name'),
              phone: t('contact2Phone')
            }
          ]}
        >
          {t('contactDescription')}
        </Contact>
        
      </main>

      <footer className={styles.footer}>
        {t('moreSoon')} ❤ <em>{t('brideAndGroom')}</em>
      </footer>
    </>
  )
}

export default Home
