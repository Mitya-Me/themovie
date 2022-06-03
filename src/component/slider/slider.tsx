import { FC, useState } from 'react' 
import { ISliderProps } from './slider.props'
import styles from './slider.module.scss'
import cn from 'classnames'
import {ReactComponent as Arrow} from './icons/arrow.svg'

export const Slider = ({movies}:ISliderProps) => { 
    const [slide, setSlide] = useState<number>(0)

    return (
        <div className={styles.slider}>
            <div className={styles.slide}>
                <div className={styles.slide__left}>
                    <div className={styles.slide__left_text}>{movies[slide].description}</div>
                    <div className={styles.slide__left_title}>{movies[slide].title}</div>
                    <div className={styles.slide__left_genre}>{movies[slide].genre}</div>
                </div>
                <div className={styles.sliderRight} style={{backgroundImage: `url(${movies[slide].image})`}}/>
            </div>
            <div className={cn(styles.arrow, styles['arrow--left'])}> 
                <Arrow/>
            </div>
            <div className={cn(styles.arrow, styles['arrow--right'])}> 
                <Arrow/>
            </div>
        </div>
    );
} 
