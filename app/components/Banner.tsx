import Image from 'next/image';
import bookImg from '@/app/assets/libro-js-mini.png'
import styles from './Banner.module.css'

export default function Banner() {
    return (
        <a href="https://amzn.to/3Nf1XqL" target="_blank">
            <aside className={styles.banner}>
            <Image className={styles.bannerImg} width={75} src={bookImg} alt="Libro Aprendiendo JavaScript"/>
            <p>
                Mi libro
                <strong> Aprende JavaScript</strong>
                <br />
                ya a la venta en Amazon 🚀
                <span className={styles.label}>Comprar</span>
            </p>
            </aside>
      </a>
    )
}