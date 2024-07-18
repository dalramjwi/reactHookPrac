//! useState in JS
// Vanilla JS 상태 관리
//state 변수 0으로 초기화
let state = 0;
const setState = (newState) => {
  //매개변수 newState로 state 값 업데이트
  state = newState;
  console.log(state); // 상태 업데이트 확인
};
// setState 함수 호출, state 값을 1로 업데이트
setState(1); // 상태 업데이트
