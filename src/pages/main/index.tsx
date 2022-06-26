import { Slider } from "../../components/slider"
import image from '../../assets/images/slider/test_img.webp'
import test_image from '../../assets/images/slider/1917_test_movie_poster.jpg'
import test_image2 from '../../assets/images/slider/little_woman_test_movie_poster.jpg'
import test_image3 from '../../assets/images/slider/starwarsriseofskywalker_test_movie_poster.jpg'
import { CinemaHall } from "../../components/cinemaHall"


export const MainPage = () => { 
    const auth = true

    return auth 
        ?  <div className='mainPage'>
            <Slider movies={[
                {id: 1, title: 'Coffee and Cigaretes', description: ' simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', genre: 'Drama', image },
                {id: 2, title: '1917', description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', genre: 'Horror', image: test_image },
                {id: 3, title: 'Little woman', description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.', genre: 'Fantastic, Adventure', image: test_image2 },
                {id: 4, title: 'Star Wars: The rise of Skywalker', description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', genre: 'Action, drama', image: test_image3 },
            ]}/>  
            <CinemaHall/>
           </div>
        : <div> AUTH_FALSE </div>
} 
