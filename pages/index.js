import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { matrix } from '@/data/matrix.js'
import Accordion from '@/components/Accordion'
import { useState, useEffect } from 'react'

export default function Home() {

  const [totalCredits, setTotalCredits] = useState(0);
  const [data, setData] = useState([...matrix.courses]);

  var title = process.env.NEXT_PUBLIC_TITLE;

  useEffect(() => {
    var x = 0;

    data.map((i) => {
      x += i.credits;
    })

    setTotalCredits(x)
  }, [])

  return (
    <>
      <Head>
        <title>Environmental Variable and Accordion</title>
        <meta name="description" content="MDIA2109 Class 12" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{title}</h1>
        {
          data && data.map((info, index) => {
            return (
              <Accordion key={index} term={info.term} code={info.code} title={info.title} credits={info.credits.toFixed(1)} description={info.description} />
            )
          })
        }
        {totalCredits.toFixed(1)};
      </main>
    </>
  )
}
