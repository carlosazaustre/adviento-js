import Image from 'next/image'
import logoGaraje from '@/app/assets/sponsor-garajedeideas.jpeg'
import logoDonDominio from '@/app/assets/sponsor-dondominio.png'
import styles from './Sponsors.module.css'

export default function Sponsors() {
    return (
        <aside className={styles.sponsors}>
            <p>
                <span>Con la colaboración de</span>
                <div className={styles.logos}>
                    <a title="Garaje de Ideas" href="https://bit.ly/tech-talento-garaje-ca" target="_blank">
                        <Image className={styles.image} height="50" src={logoGaraje} alt="Garaje de Ideas" />
                    </a>
                    <a title="DonDominio" href="https://cazaustre.link/dondominio-web" target="_blank">
                        <Image className={styles.image} height="35" src={logoDonDominio}  alt="Don Dominio" />
                    </a>
                </div>
            </p>
       </aside>
    )
}