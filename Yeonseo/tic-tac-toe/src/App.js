//App.js의 코드는 컴포넌트를 생성한다.
//컴포넌트 - 사용자 인터페이스 일부를 표시하는 재사용 가능한 코드 조각으로, UI를 렌더링, 관리, 업데이트한다.

//Saqure 컴포넌트를 만들어, 재사용하기 -> ❕컴포넌트는 대문자로 시작해야 한다
//props로 각 사각형이 가져야 할 값(value) 부모->자식 컴포넌트로 전달하기
//❕jsx에서 js로 escape하려면, 중괄호 내에 js 변수를 써줘야 한다.
function Square({ value }) {
  return <button className="square">{value}</button>;
}

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
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  ); //버튼을 반환한다.
}
