import { Slider } from "../../components/slider"
import { DatePicker } from "../../components/datePicker"
import { dates } from "../../mockData/datePicker"
import { movies } from "../../mockData/movies"
import { EventsList } from "../../components/eventsList"
import { Features } from "../../components/features"
import { CatalogWidget } from "../../components/catalogWidget"

export const MainPage = () => {
    const auth = true

    return auth
        ? <div className='mainPage'>
            <CatalogWidget />
            <DatePicker dates={dates} />
            <Slider movies={movies} />
            <EventsList movies={movies} />
            <Features />
        </div>
        : <div> AUTH_FALSE </div>
} 
