import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // useEffect(() => {
  //   console.log("마운트 및 업데이트 될 때 실행");
  // });

  // useEffect(() => {
  //   console.log("마운트 될 때 실행");
  // }, []);

  // =>빈배열을 넣어서 마운트 될 때만 실행하게 함

  useEffect(() => {
    console.log("num 값이 변경될 때 실행");
    return () => {
      console.log("cleanup 함수 실행");
    };
  }, [num]);

  // =>특정값이 변경되었을 때 실행시킬 수 있다
  // => return 뒤에 함수를 넣는다 => 위에 넣은 함수를 종료시킴

  return (
    <div>
      <h3>{num}</h3>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

export default App;

// *useEffect
// => useEffect(() =>{},[])
// =>도화지에 그림 그리기 전 작업(선수작업)!

// =>mount: 첫 랜더링
// =>update: 리 랜더링
// =>unmount: 화면에서 사라질 때(삭제)
// =>콜백함수: 랜더링이 되거나 리 랜더가 되었을 때 실행됨
// =>deps: 화면에 첫 랜더링 될때 또는 값이 변경될 때 실행
// 빈 배열로 작성 시 화면에 첫 랜더링 될때만 실행됨
