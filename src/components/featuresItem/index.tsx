import { UIButton } from '../../ui/uiButton'
import styles from './featuresItem.module.scss'
import image from '../../assets/images/features/test_features.webp'
import image2 from '../../assets/images/features/test_2_features.webp'
import cn from 'classnames';

export const FeaturesItem = () => { 

    return (
    <>
            <div className={styles.featureItem}>
                <div className={styles.featureItem__img}>
                    <div className={styles.featureItem__img_wrap}> 
                        <img src={image} alt='' />
                    </div>
                </div>
                <div className={styles.featureItem__text}>  
                    <h3 className={styles.featureItem__text_title}> Reverside Bar </h3>
                    <div className={styles.featureItem__text_description}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore maxime veritatis voluptas, repellat magni earum odit vero officia praesentium accusantium, ea minima nesciunt? Neque! </div>
                    <UIButton text='find out more'/>
                </div>
            </div>
            <div className={cn(styles.featureItem, styles['featureItem--reverse'])}>
                <div className={styles.featureItem__img}>
                    <div className={styles.featureItem__img_wrap}> 
                        <img src={image2} alt='' />
                    </div>
                </div>
                <div className={styles.featureItem__text}>  
                    <h3 className={styles.featureItem__text_title}> Perfect for any event </h3>
                    <div className={styles.featureItem__text_description}> Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolore maxime veritatis voluptas, repellat magni earum odit vero officia praesentium accusantium, ea minima nesciunt? Neque! </div>
                    <UIButton text='find out more'/>
                </div>
            </div>
    </>
    )
} 
