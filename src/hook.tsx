// React 라이브러리에서 useState Hook 가져오기
import React, { useState } from "react";

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

export default Counter; // Counter 컴포넌트를 내보내기
