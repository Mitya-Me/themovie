import { FC } from 'react' 
import { Slider } from './component/slider/slider';
import image from './component/slider/test_img.webp'

const App:FC = () => { 

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Slider movies={[
        {id: 1, title: 'Coffee and Cigaretes', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, aut?', genre: 'Drama', image },
        {id: 2, title: 'Graf Dracula', description: 'bla-bla-bla film', genre: 'Horror', image },
        {id: 3, title: 'X-men', description: 'Mutant film', genre: 'Fantastic, Adventure', image },
        {id: 4, title: 'RAMBO', description: 'Its classic action! Its classic hero!', genre: 'Action, drama', image },
      ]}/>
    </div>
  )
} 

export default App;