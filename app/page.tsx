import Image from 'next/image';
import logo from '@/app/assets/logo.png'
import Banner from '@/app/components/Banner'
import Navbar from '@/app/components/Navbar'
import Sponsors from './components/Sponsors';
import Creator from '@/app/components/Creator'
import Cell from '@/app/components/Cell'
import Counter from '@/app/components/Counter'
import styles from './page.module.css'

type VideoItem = {
  snippet: {
    resourceId: {
      videoId: string;
    }
  }
}

export default async function Home() {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const PLAYLIST_ID = process.env.PLAYLIST_ID;
  const GOOGLE_API_URL = "https://www.googleapis.com/youtube/v3"
  const ENDPOINT_URL = `${GOOGLE_API_URL}/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}&maxResults=24`

  console.log(ENDPOINT_URL)
  const data = await fetch(ENDPOINT_URL)
  const videos = await data.json();
  const videosId = videos.items.map((item: VideoItem) => item.snippet.resourceId.videoId);

  return (
    <>
      <Banner />
      <Navbar />

      <header className={styles.logo}>
        <div className={styles.wrapper}>
          <Image
            className={styles.logoImage}
            width="120"
            src={logo}
            alt="Logo de Adviento de JavaScript" />
          <section>
            <h1 className={styles.logoTitle}>Adviento de <span>JavaScript</span></h1>
            <p className={styles.copy}>
              Aprende un tip de JavaScript cada día, durante 24 días, hasta Navidad.
              <br/><br/>Próximo video en:
            </p>
          </section>
        </div>
      </header>

      <Counter />

      <Sponsors />

      <main className={styles.container}>
        {videosId.map((videoId: string, index: number) => (
          <Cell key={videoId} videoId={videoId} />
        ))}
        {Array.from({ length: 24 - videosId.length }, (_, i) => i + 1).map((day: number, index: number) => (
          <Cell key={index + videosId.length + 1} text={index + videosId.length + 1} />
        ))}
      </main>

     <Creator />

      <footer className={styles.footer}>
        <p>💻 con 💛 por Carlos Azaustre &copy; 2023</p>
      </footer>
    </>
  )
}
