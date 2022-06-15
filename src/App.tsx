import { FC } from 'react' 
import './styles/globalStyles.scss'
import { Layout } from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './appRouter';

const App:FC = () => { 

  return (
      <BrowserRouter>
        <Layout>
          <AppRouter/> 
        </Layout>
      </BrowserRouter>
  )
} 

export default App;