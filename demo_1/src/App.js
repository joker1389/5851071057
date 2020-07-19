import React, { Component } from 'react';
import Home from './component/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './component/Header';
import Contact from './component/Contact';
import HomeStay from './component/rooms/HomeStay';
import KhachSan from './component/rooms/KhachSan';
import Villa from './component/rooms/Villa';
import Hs1 from './component/rooms/cpn/homestay/Hs1';
import Hs2 from './component/rooms/cpn/homestay/Hs2';
import Hs3 from './component/rooms/cpn/homestay/Hs3';
import Ks1 from './component/rooms/cpn/hotel/Ks1';
import Ks2 from './component/rooms/cpn/hotel/Ks2';
import Ks3 from './component/rooms/cpn/hotel/Ks3';
import Vl1 from './component/rooms/cpn/villa/Vl1';
import Vl2 from './component/rooms/cpn/villa/Vl2';
import Vl3 from './component/rooms/cpn/villa/Vl3';


class App extends Component {




    render() {
        
        return (
            <div>
                <Router>
                    <Header />                
                    <Route exact path='/' component={Home}  />
                    <Route path='/contact' component={Contact} />
                    <Route exact path='/homestay' component={HomeStay}  />
                    <Route path='/hotel' component={KhachSan} />
                    <Route path='/villa' component={Villa} />
                    <Route path='/hs1' component={Hs1} />
                    <Route path='/hs2' component={Hs2} />
                    <Route path='/hs3' component={Hs3} />
                    <Route path='/ks1' component={Ks1} />
                    <Route path='/ks2' component={Ks2} />
                    <Route path='/ks3' component={Ks3} />
                    <Route path='/vl1' component={Vl1} />
                    <Route path='/vl2' component={Vl2} />
                    <Route path='/vl3' component={Vl3} />
                </Router>


            </div>
        );
    }
}

export default App;
 