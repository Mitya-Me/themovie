import { Slider } from "../../components/slider/Slider"
import image from '../../assets/images/slider/test_img.webp'

export const MainPage = () => { 
    const auth = true

    return auth 
        ?  <div className='mainPage'>
            <Slider movies={[
                {id: 1, title: 'Coffee and Cigaretes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut?', genre: 'Drama', image },
                {id: 2, title: 'Graf Dracula', description: 'bla-bla-bla film', genre: 'Horror', image },
                {id: 3, title: 'X-men', description: 'Mutant film', genre: 'Fantastic, Adventure', image },
                {id: 4, title: 'RAMBO', description: 'Its classic action! Its classic hero!', genre: 'Action, drama', image },
            ]}/>  
           </div>
        : <div> AUTH_FALSE </div>
} 
