// import logo from './logo.svg';
import Card from '../components/Card';
import './css/global.css';
// import MyTab from '../components/Tabs.js'
import {dataSrc} from '../data/Mydata.js'
import { useState } from 'react';

function HomeState() {
  const [totalItem, setTotalItem] = useState(5);
  const [loadedAll, setLoadedAll] = useState(false);

  function handleLoadMore() {
    if(totalItem >= dataSrc.length){
      setLoadedAll(true);
    }else{
      setLoadedAll(false);
    }
    setTotalItem(totalItem + 5);
  }

  return (
   <div>
    <div className='container'>
      <div className='row'>
      {dataSrc.slice(0, totalItem).map((item, index) =>
           <Card title={item.title} img={item.thumbnailUrl}/>
           )}
           {!loadedAll &&
              <button onClick={handleLoadMore}>load more</button>
           }
    </div>
    </div>
   </div>
  );
}

export default HomeState;
