// React 라이브러리에서 useState Hook 가져오기
import React, { useState, useEffect, useContext } from "react";

// Counter 컴포넌트 정의
function Counter() {
  // useState Hook 사용
  // useState(0)으로 count 상태 변수와 setCount 상태 변경 함수 선언
  // count의 초기값은 0
  //const [현재 state 변수, state 를 변경하기 위한 함수] = useState(초기값);
  const [count, setCount] = useState(0);

  // 컴포넌트가 렌더링하는 JSX 반환
  return (
    <div>
      {/* 중괄호({}) 안에 JavaScript 표현식을 넣어서 count 값을 표시 */}
      <p>Count: {count}</p>
      {/* 버튼 클릭 시 setCount 함수 호출하여 count 값을 1 증가시킴 */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// React 라이브러리에서 useEffect Hook 가져오기

// ClickLogger 컴포넌트 정의
function ClickLogger() {
  // useEffect Hook 사용
  /**
   * 매번 컴포넌트가 렌더링 될 때 특정 조건에 의존하여 수행되며, 컴포넌트가 최대한 순수 함수를 유지할 수 있도록 도와주는 함수
   * 이벤트 핸들러에 속하는 개념
   * 지금까지 사용한 이벤트 핸들러는 렌더링 이후, 사용자의 상호작용에 의해 실행되는 함수
   *useEffect는 렌더링 이후에 실행되고, 특정 조건을 만족하면 실행된다는 차이가 존재
   * useEffect가 실행되는 시점은 컴포넌트가 렌더링된 이후
   * !useEffect(function, deps)
   * function 실행하고자 하는 함수
   * deps 배열 형태, function을 실행시키는 조건. deps에 특정 값을 넣으면 컴포넌트가 나타날 때 혹은 지정한 값이 업데이트 될 때 useEffect 실행
   **/
  useEffect(() => {
    // 클릭 핸들러 함수 정의
    const handleClick = () => console.log("Document clicked");

    // 컴포넌트가 마운트될 때 document에 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleClick);

    // 클린업 함수 반환: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // 의존성 배열이 빈 배열이므로, 한 번만 실행됨

  return <div>Click anywhere to log to console.</div>; // JSX 반환
}

// React 라이브러리에서 useContext 및 createContext 함수 가져오기

// MyContext 객체 생성, 기본값 'Hello, World!' 설정
const MyContext = React.createContext("Hello, World!");

// DisplayValue 컴포넌트 정의
function DisplayValue() {
  // useContext Hook 사용하여 MyContext 값 가져오기
  const value = useContext(MyContext);

  // 가져온 값을 JSX로 반환하여 렌더링
  return <div>{value}</div>;
}

// App 컴포넌트 정의
function App() {
  return (
    // MyContext.Provider로 컴포넌트 감싸고 value 속성으로 전달할 값 설정
    <MyContext.Provider value="Hello, React!">
      <DisplayValue /> {/* DisplayValue 컴포넌트 사용 */}
    </MyContext.Provider>
  );
}

export default App; // App 컴포넌트를 내보내기
