import Head from 'next/head'
import HomePage from '../src/components/HomePage'
import { ArticleContextProvider } from '../src/Context/ArticlesContext'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Easy Live</title>
      </Head>
      <ArticleContextProvider>
        <HomePage />
      </ArticleContextProvider>
    </div>
  )
}
