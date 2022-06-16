import styles from './notFound.module.scss'
import {UIButton} from '../../ui/uiButton'

export const NotFoundPage = () => { 

    return (
        <div className={styles.notFound}>
            <div className={styles.notFound__gif}></div>
            <h1 className={styles.notFound__title}> Lights, Camera, Oops - page not found! </h1>
            <div className={styles.notFound__btns}>
                <UIButton text='go to gome page' width='33%'/>
                <UIButton text='show what movies are showing' width='33%'/>
                <UIButton text='what events are happening' width='33%'/>
            </div>
        </div>
    )
} 
