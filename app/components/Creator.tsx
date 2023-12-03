import Image from 'next/image';
import avatarImg from '@/app/assets/carlos_azaustre.png'
import gdeImg from '@/app/assets/gde-logo.png'
import mvpImg from '@/app/assets/mvp-logo.png'
import styles from './Creator.module.css'

export default function Creator() {
    return (
        <aside className={styles.creator}>
            <figure className={styles.avatar}>
            <Image src={avatarImg} width={100} objectFit="contain" alt="Carlos Azaustre" />
            </figure>
            <div className={styles.creatorCopy}>
            <p>Soy <strong>Carlos Azaustre. </strong>
            Ingeniero de Software, Educador y Divulgador de contenido
            sobre Programación y JavaScript en redes sociales,
            desde hace más de 10 años. Reconocico como
            Google Developer Expert y Microsoft MVP</p>
            <div className={styles.creatorLogos}>
                <Image height="30" src={gdeImg} alt="Google Developer Expert en Web" />
                <Image height="30" src={mvpImg} alt="Microsoft MVP en Tecnologías de Desarrollo" />
            </div>
            </div>
      </aside>
    )
}