import './App.css';
import Appbar from './components/Appbar'
import Homepage from './components/Homepage'
import Test from './components/Test'

import CreateBowler from './components/BowlerComponents/CreateBowler'
import GetBowler from './components/BowlerComponents/GetBowler'
import GetAllBowlers from './components/BowlerComponents/GetAllBowlers'
import UpdateBowler from './components/BowlerComponents/UpdateBowler'
import DeleteBowler from './components/BowlerComponents/DeleteBowler'

import CreateSeries from './components/SeriesComponents/CreateSeries'
import GetSeries from './components/SeriesComponents/GetSeries'
import GetAllSeries from './components/SeriesComponents/GetAllSeries'
import UpdateSeries from './components/SeriesComponents/UpdateSeries'
import DeleteSeries from './components/SeriesComponents/DeleteSeries'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path='/' element={[<Appbar/>,<Homepage/>]}/>
            <Route exact path='/createBowler' element={<CreateBowler/>}/>
            <Route exact path='/getBowler' element={<GetBowler/>}/>
            <Route exact path='/getAllBowlers' element={<GetAllBowlers/>}/>
            <Route exact path='/updateBowler' element={<UpdateBowler/>}/>
            <Route exact path='/deleteBowler' element={<DeleteBowler/>}/>
            <Route exact path='/createSeries' element={<CreateSeries/>}/>
            <Route exact path='/getSeries' element={<GetSeries/>}/>
            <Route exact path='/getAllSeries' element={<GetAllSeries/>}/>
            <Route exact path='/updateSeries' element={<UpdateSeries/>}/>
            <Route exact path='/deleteSeries' element={<DeleteSeries/>}/>
            <Route exact path="/test" element={<Test/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;