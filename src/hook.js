// //! useState in JS
// // Vanilla JS 상태 관리
// //state 변수 0으로 초기화
// let state = 0;
// const setState = (newState) => {
//   //매개변수 newState로 state 값 업데이트
//   state = newState;
//   console.log(state); // 상태 업데이트 확인
// };
// // setState 함수 호출, state 값을 1로 업데이트
// setState(1); // 상태 업데이트
//! useEffect in JS

//Vanilla JS 부수효과 관리
// document에 클릭 이벤트 리스너 추가
document.addEventListener("click", () => {
  // 클릭 시 콘솔에 메시지 출력
  console.log("Document clicked");
});

// Cleanup function: 이벤트 리스너 제거
document.removeEventListener("click", () => {
  console.log("Document clicked");
});

//! useContext in JS
// Vanilla JS 전역 상태 관리

// 전역 상태 관리용 객체 생성
const MyContext = {
  value: "Hello, World!", // 전역 상태 값
};

// 전역 상태 값을 반환하는 함수 정의
const getValue = () => MyContext.value;

// 함수 호출하여 전역 상태 값 콘솔에 출력
console.log(getValue()); // 'Hello, World!'

//! useReducer in JS

// Vanilla JS 복잡한 상태 관리

// 초기 상태 객체 정의
const initialState = { count: 0 };

// 리듀서 함수 정의
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

// 현재 상태 초기화
let state = initialState;

// 상태 변경 함수 정의
const dispatch = (action) => {
  // 리듀서 함수를 호출하여 새로운 상태를 설정
  state = reducer(state, action);
  // 새로운 상태를 콘솔에 출력
  console.log(state);
};

// 상태 변경 함수 호출, count를 1 증가
dispatch({ type: "increment" }); // { count: 1 }
