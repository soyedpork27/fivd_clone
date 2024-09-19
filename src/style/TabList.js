import {styled} from 'styled-components';

// GNBList 에서 사용하기 위함
import {Link, useLocation} from 'react-router-dom';

// 상세 css
import './css/link.css'

// ul 태그
const TabBox = styled.ul`
  --num-tabs: ${(props) => props.length};
  display: flex;
  width : 100%;
  height : 60px;
`;

// li 태그
const TabList = styled.li`
  width: calc(100% / var(--num-tabs));
  height : 100%;
  text-align: center;
  border-bottom : 1px solid #863CFF;
`;

// GNB 탭
export function GNBList({lists, listLength}){
  const pathname = useLocation().pathname;
  return (
    <TabBox length={listLength}>
        {lists.map((list,idx) => (<TabList key={idx} >
          <Link to={`${list.path}`} className={`TabList-text ${pathname===list.path&&'on'}`} > {list.text} </Link>
        </TabList>))}
      </TabBox>
  )
};

// 탭 버튼
export function TabNav({lists}){

  return (
    <TabBox>
        {lists.map((list,idx) => (<TabList length={lists.length} key={idx} >
          <span className={`TabList-text `} > {list.text} </span>
        </TabList>))}
      </TabBox>
  )

}