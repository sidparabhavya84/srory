import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './Componats/Header/Header';
import Story from './Componats/Form/Story';
import ViewStory from './Componats/View/ViewStory';
import UpdateStory from './Componats/UpdateStory/UpdateStory';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ViewStory />} />
          <Route path='/updateStory' element={<UpdateStory />} />
          <Route path='/createStory' element={<Story />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
