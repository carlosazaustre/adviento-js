'use client';

import { useEffect, useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const now = new Date();
        const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 18, 0, 0);
        const diff = tomorrow.getTime() - now.getTime();

        const updateCounter = () => {
            const remainingTime = Math.max(diff - (new Date().getTime() - now.getTime()), 0);
            const updatedHours = Math.floor(remainingTime / (1000 * 60 * 60));
            const updatedMinutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            const updatedSeconds = Math.floor((remainingTime / 1000) % 60);

            setHours(updatedHours);
            setMinutes(updatedMinutes);
            setSeconds(updatedSeconds);
        };

        updateCounter();

        const intervalId = setInterval(updateCounter, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.counter}>
            <span className={styles.item}>
                <span className={styles.number}>{hours.toString().padStart(2, '0')}</span>
                <span className={styles.time}>Horas</span>
            </span>
            <span className={styles.item}>
                <span className={styles.number}>{minutes.toString().padStart(2, '0')}</span>
                <span className={styles.time}>Minutos</span>
            </span>
            <span className={styles.item}>
                <span className={styles.number}>{seconds.toString().padStart(2, '0')}</span>
                <span className={styles.time}>Segundos</span>
            </span>
        </div>
    );
}