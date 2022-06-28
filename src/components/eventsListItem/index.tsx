import { IEventsListItemProps } from "./eventsListItem.props"
import styles from './eventsListItem.module.scss'

export const EventsListItem = ({ movie }: IEventsListItemProps) => { 
    const {description, genre, image, title} = movie
    console.log(image);

    return (
        <div className={styles.event}>
            <div className={styles.event__img}>
                <img src={image} alt={title}/>
            </div>
            <ul className={styles.event__text}>
                <li className={styles.event__text_title}> {title} </li>
                <li className={styles.event__text_genre}> {genre} </li>
                <li className={styles.event__text_description}> {description} </li>
            </ul>
        </div>
    )
} 
