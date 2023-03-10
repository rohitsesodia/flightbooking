// import logo from './logo.svg';
import Card from '../components/Card';
import './css/global.css';
// import MyTab from '../components/Tabs.js'
import {dataSrc} from '../data/Mydata.js'
import { useState } from 'react';

function Home() {
  const [totalItem, setTotalItem] = useState(5);
  return (
   <div>
    <div className='container'>
      <div className='row'>
      {dataSrc.map((item, index) =>
           <Card title={item.title} img={item.thumbnailUrl}/>
           )}
    </div>
    </div>
   </div>
  );
}

export default Home;
