import styles from './cinemaHall.module.scss'

export const cinemaHall = () => {
    return (
        <div className={styles.cinemaHall}>
            <div className={`${styles['cinemaHall__seat-tag']} ${styles['seat-tag']}`}>
                <ul className={styles['seat-tag__list']}>
                    <li className={styles['seat-tag__list-item']}>you seat</li>
                    <li className={styles['seat-tag__list-item']}>available</li>
                    <li className={styles['seat-tag__list-item']}>wheelchair</li>
                </ul>
            </div>
            <div className={`${styles['cinemaHall__seat-selection']} ${styles['seat-selection']}`}>
                <div className={styles['seat-selection__screen']}></div>
                <div className={styles['seat-selection__places']}></div>
            </div>
            <button className={styles['cinemaHall__btn']}>Next</button>
        </div>
    )
}