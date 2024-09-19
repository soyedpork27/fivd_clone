import React, { useContext, useEffect, useRef } from 'react';

import { Outlet } from 'react-router-dom';
import { scrollContext } from '../contexts/scrollContext/scrollContext';

function Main(props) {

  const mainRef = useRef(null);
  const scrollRef = useRef(0);

  const {handleTopView, topView} = useContext(scrollContext);

  useEffect(()=>{

    // scrollTop 값이 커지면 => false : 숨김
    // scrollTop 값이 작아지면 => true : 보여줌

    const handleScrollEvent = () => {
      const getScrollTop = parseInt(mainRef.current.scrollTop);

      if(scrollRef.current===getScrollTop){
        return ;
      }


      if(scrollRef.current < getScrollTop){
        // 스크롤이 아래로 되는 상황임
        if(topView){
          handleTopView(false);
          scrollRef.current = getScrollTop - 16;

        }
      }else if(scrollRef.current > getScrollTop){
        // 스크롤이 위로 되는 상황임
        if(!topView){
          handleTopView(true);
          scrollRef.current = getScrollTop + 16;
        }
      }

    }


    mainRef.current.addEventListener('scroll', handleScrollEvent)
  },[handleTopView, topView]);

  const mainStyle = {
    marginTop : `${topView?120:60}px`,
    height : `calc(100vh - ${topView?120:60}px)`
  }
  
  return (
    <>
      <main ref={mainRef} className='default_main' style={mainStyle} >
        <Outlet />
      </main>
    </>
  );
}

export default Main;