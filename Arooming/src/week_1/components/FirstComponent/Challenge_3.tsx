//3. Spot the mistake

// before
/* function profile() {
    return (
      <img
        src="https://i.imgur.com/QIrZWGIs.jpg"
        alt="Alan L. Hart"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>Amazing scientists</h1>
        <profile />
        <profile />
        <profile />
      </section>
    );
  }
*/

// after - 핵심: export default 위치 변경
export default function profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

// Gallery 컴포넌트를 분리하지 않으면 vscode 상에서 에러가 발생하기 때문에 주석처리 해둠
/* function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>

      <profile />
      <profile />
      <profile />
    </section>
  );
}
*/
