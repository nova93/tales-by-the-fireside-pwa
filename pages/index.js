import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Tales by the Fireside
        </h1>

        <p className={styles.description}>
          Newest podcasts
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Tales for Everyone &rarr;</h3>
            <p>Alice's Adventures in Wonderland</p>
            <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
          </div>

          <div className={styles.card}>
            <h3>Tales for Children &rarr;</h3>
            <p>SunStar Books Collection</p>
            <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
          </div>

          <div className={styles.card}>
            <h3>Tales for Adults &rarr;</h3>
            <p>Love in Quarantine</p>
            <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
          </div>

          <div className={styles.card}>
            <h3>Tales for Children &rarr;</h3>
            <p>Cat's Eye View of... Lockdown</p>
            <audio controls src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"></audio>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
          2020 &copy; Tales by the Fireside
      </footer>
    </div>
  )
}
