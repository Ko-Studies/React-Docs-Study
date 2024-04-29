//App.js의 코드는 컴포넌트를 생성한다.
//컴포넌트 - 사용자 인터페이스 일부를 표시하는 재사용 가능한 코드 조각으로, UI를 렌더링, 관리, 업데이트한다.

//✨export 키워드 - 파일 외부에서 접근 가능
//✨default 키워드 - 코드를 사용하는 다른 파일에서, 이 함수가 주요 함수임을 알려줌
export default function Board() {
  //Sqaure 함수를 정의
  //✨return 키워드 - 뒤에 오는 모든 것이 함수 호출자에게 값으로 반환됨
  //✨className 키워드 - 버튼 prop 또는 프로퍼티, css에 스타일 지정 방법 알려줌
  //JSX 엘리먼트를 닫으면 다음 콘텐츠를 배치해서는 안됨을 나타냄
  return (
    //React 컴포넌트는 단일 JSX element를 반환해야 한다. -> 이런 경우 Fragments로 감싸야 한다.
    <>
      <>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </>
    </>
  ); //버튼을 반환한다.
}
