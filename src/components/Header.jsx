import React, { useContext } from 'react';

// widgets
import Topbar from './Topbar';
import {GNBList} from '../style/TabList';
import { scrollContext } from '../contexts/scrollContext/scrollContext';

function Header(props) {

  const {topView} = useContext(scrollContext);

  // GNB 탭 텍스트와 경로 선언 변수
  const GNB = [
    {
      text : '홈',
      path : '/',
    },
    {
      text : '소개',
      path : '/introduce',
    },
    {
      text : '트레이너',
      path : '/expert',
    },
    {
      text : '차트',
      path : '/chart',
    }
  ];

  const fixedStyle = {
    top : `${topView?0:-60}px`
  }


  return (
    
    <div className='fixed_box' style={fixedStyle}>
        <Topbar />
        <header>
          <GNBList lists={GNB} listLength={parseInt(GNB.length)} />
        </header>
      </div>

  );
}

export default Header;