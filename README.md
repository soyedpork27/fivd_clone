### 포트폴리오를 위한 React clone 코딩 입니다.

- 작성자 : 전찬혁

- 시작일 : 2024-09-17

---

- 라이브러리
| - React.js
| - axios
| - react-router-dom
| - styled-components
| - react-icons

- 사용 예정
| - redux
| - node.js
| - 

---

- 구현내용

1. useContext를 활용한 스크롤 이벤트

- 스크롤 이벤트 발생 시 useRef를 활용해 스크롤 방향을 정의하고, 그에 따라 context의 state를 제어해 화면 최상단 요소를 숨기거나 보여주는 로직 구현

```js
  import {createContext, useState} from 'react';

export const scrollContext = createContext();

export function ScrollContextProvider({children}){

  const [topView, setTopView] = useState(true);

  // 스크롤값 핸들러
  const handleTopView = (bool) => {
    setTopView(bool);
  }

  return (<scrollContext.Provider value={{topView, handleTopView}}>{children}</scrollContext.Provider>)
}
```

