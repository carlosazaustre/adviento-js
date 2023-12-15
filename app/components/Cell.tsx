import styles from './Cell.module.css';

export default function Cell({
    videoId,
    text,
}: {
    videoId?: string | null;
    text?: string;
}) {
    if (!videoId) return (
        <div className={styles.cell}>
            <span className={styles.cellText}>{text}</span>
        </div>
    )

    return (
        <div className={styles.cell}>
            <iframe
                className={styles.video}
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}