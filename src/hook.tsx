// React 라이브러리에서 useState Hook 가져오기
import React, { useState, useEffect, useContext, useReducer } from "react";

// // Counter 컴포넌트 정의
// // function Counter() {
// //   // useState Hook 사용
// //   // useState(0)으로 count 상태 변수와 setCount 상태 변경 함수 선언
// //   // count의 초기값은 0
// //   //const [현재 state 변수, state 를 변경하기 위한 함수] = useState(초기값);
// //   const [count, setCount] = useState(0);

// //   // 컴포넌트가 렌더링하는 JSX 반환
// //   return (
// //     <div>
// //       {/* 중괄호({}) 안에 JavaScript 표현식을 넣어서 count 값을 표시 */}
// //       <p>Count: {count}</p>
// //       {/* 버튼 클릭 시 setCount 함수 호출하여 count 값을 1 증가시킴 */}
// //       <button onClick={() => setCount(count + 1)}>Increment</button>
// //     </div>
// //   );
// // }

// // React 라이브러리에서 useEffect Hook 가져오기

// // ClickLogger 컴포넌트 정의
// function ClickLogger() {
//   // useEffect Hook 사용
//   /**
//    * 매번 컴포넌트가 렌더링 될 때 특정 조건에 의존하여 수행되며, 컴포넌트가 최대한 순수 함수를 유지할 수 있도록 도와주는 함수
//    * 이벤트 핸들러에 속하는 개념
//    * 지금까지 사용한 이벤트 핸들러는 렌더링 이후, 사용자의 상호작용에 의해 실행되는 함수
//    *useEffect는 렌더링 이후에 실행되고, 특정 조건을 만족하면 실행된다는 차이가 존재
//    * useEffect가 실행되는 시점은 컴포넌트가 렌더링된 이후
//    * !useEffect(function, deps)
//    * function 실행하고자 하는 함수
//    * deps 배열 형태, function을 실행시키는 조건. deps에 특정 값을 넣으면 컴포넌트가 나타날 때 혹은 지정한 값이 업데이트 될 때 useEffect 실행
//    **/
//   useEffect(() => {
//     // 클릭 핸들러 함수 정의
//     const handleClick = () => console.log("Document clicked");

//     // 컴포넌트가 마운트될 때 document에 클릭 이벤트 리스너 추가
//     document.addEventListener("click", handleClick);

//     // 클린업 함수 반환: 컴포넌트가 언마운트될 때 이벤트 리스너 제거
//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []); // 의존성 배열이 빈 배열이므로, 한 번만 실행됨

//   return <div>Click anywhere to log to console.</div>; // JSX 반환
// }

// // React 라이브러리에서 useContext 및 createContext 함수 가져오기

// // MyContext 객체 생성, 기본값 'Hello, World!' 설정
// const MyContext = React.createContext("Hello, World!");

// // DisplayValue 컴포넌트 정의
// function DisplayValue() {
//   // useContext Hook 사용하여 MyContext 값 가져오기
//   const value = useContext(MyContext);

//   // 가져온 값을 JSX로 반환하여 렌더링
//   return <div>{value}</div>;
// }

// // App 컴포넌트 정의
// function App() {
//   return (
//     // MyContext.Provider로 컴포넌트 감싸고 value 속성으로 전달할 값 설정
//     <MyContext.Provider value="Hello, React!">
//       <DisplayValue /> {/* DisplayValue 컴포넌트 사용 */}
//     </MyContext.Provider>
//   );
// }

//!useReducer
// React 라이브러리에서 useReducer Hook 가져오기
/**
 * 복잡한 상태 관리가 필요할 때 사용하는 훅. 예를 들어 여러 개의 상태를 하나의 객체로 관리하거나, 상태 업데이트 로직이 복잡할 때 유용하다.
 * useReducer는 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수인 리듀서와, 초기 상태를 인자로 받아 상태와 디스패치 함수를 반환
 */

// 초기 상태 객체 정의
const initialState = { count: 0 };

// 리듀서 함수 정의
//state는 현재 상태, action은 상태 변경의 객체
function reducer(state, action) {
  // action의 타입에 따라 상태 변경
  switch (action.type) {
    case "increment":
      // count를 1 증가시키는 경우
      return { count: state.count + 1 };
    case "decrement":
      // count를 1 감소시키는 경우
      return { count: state.count - 1 };
    default:
      // 알 수 없는 action 타입인 경우 에러 발생
      throw new Error();
  }
}

// Counter 컴포넌트 정의
function Counter() {
  // useReducer Hook 사용하여 상태와 상태 변경 함수 반환
  /**
   * 리듀서 함수 : 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수
   * 초기 상태 : 리듀서 함수가 사용할 초기 상태
   * 디스패치 함수 : 액션을 리듀서 함수로 보내는 함수
   */
  // const [현재 state 변수 이름, action을 보내기 위한 함수 (상태를 변경 시 필요한 정보 전달)] = useReducer(리듀서 함수(dispatch를 확인해 state를 변경해주는 함수), 초기 상태(객체, 배열 등 다양한 값 가능));
  //state와 dispatch는 선언하지 않고 배열 구조분해 할당으로 할당한다.
  const [state, dispatch] = useReducer(reducer, initialState);

  // 컴포넌트가 렌더링하는 JSX 반환
  return (
    <div>
      {/* 상태 변수 state의 count 값을 표시 */}
      <p>Count: {state.count}</p>
      {/* 버튼 클릭 시 dispatch 함수 호출하여 count 값을 1 증가 */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      {/* 버튼 클릭 시 dispatch 함수 호출하여 count 값을 1 감소 */}
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}
