import { IMovies } from '../../interfaces/movie.interface'
import { EventsListItem } from '../eventsListItem'
import styles from './eventsList.module.scss'


export const EventsList = ({movies}: IMovies) => { 

    return (
        <section className={styles.eventsList}>
            {movies.map(movie => <EventsListItem movie={movie} key={movie.id}/>)}
        </section>
    )
} 
