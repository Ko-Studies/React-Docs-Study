## WEEK 1. **Describing the UI**

: React 컴포넌트를 생성, 사용자 정의 및 조건부로 표시하는 방법 소개

- React는 사용자 인터페이스(UI)를 렌더링하기 위한 JavaScript 라이브러리
    - 사용자 인터페이스(UI): 버튼, 텍스트, 이미지와 같은 작은 단위로 구성됨
- React 사용 시, 이를 재사용 가능하고 중첩 가능한 컴포넌트로 결합할 수 있음

## 0. Your First Component

1. **React Application**: `컴포넌트`라고 불린는 독립된 UI 요소로 구성됨
2. **React 컴포넌트**
    1. 마크업을 뿌릴 수 있는 JavaScript ****함수임
    2. 버튼만큼 작을 수도, 전체 페이지만큼 클 수도 있음

## 1. Importing and Exporting Components

1. **하나의 파일**에 **여러 컴포넌트 정의** 가능
    1. `문제점`: 파일의 크기가 증가함에 따라 파일 간 이동이 어려워짐
    2. `해결법`: 파일 내의 컴포넌트를 **export**하고, 다른 파일에 해당 컴포넌트를 **import**
    
    ```jsx
    import Profile from './Profile.js';
    
    export default function Gallery() {
      return (
        <section>
          <h1>Amazing scientists</h1>
          <Profile />
          <Profile />
          <Profile />
        </section>
      );
    }
    ```
    

## 2. Writing Markup with JSX

1. 각각의 React 컴포넌트는 React가 브라우저에 렌더링한는 마크업을 포함한 JavaScript 함수
2. React 컴포넌트는 `JSX`라고 불리는 구문 확장을 통해 마크업 표현
3. JSX과 HTML 차이
    1. JSX: HTML보다 `엄격한 문법` 적용
    2. JSX: `동적인 정보`를 표현

## 3. **JavaScript in JSX with Curly Braces**

1. **JSX** 사용
    1. JS 파일에 HTML 같은 마크업을 작성하여 `렌더링 로직과 콘텐츠를 동일 선상에 위치`시킬 수 있음
2. JSX 로직이나 동적 데이터를 **마크업 내에 추가**하고 싶다면, `중괄호`를 활용할 것 !
    
    ```jsx
    export default function TodoList() {
      return (
        <div style={person.theme}>
          <h1>{person.name}'s Todos</h1>
          ...
        </div>
      );
    }
    
    ```
    

## 4. **Passing Props to a Component**

1. React 컴포넌트끼리 정보 공유 시, `props`를 사용함
2. 부모 컴포넌트는 **props를 통해 자식 컴포넌트에 정보 전달 가능**
3. props를 HTML 속성과 비슷하게 생각할 수 있지만, **props**는 객체, 배열, 함수, 심지어는 `JSX를 포함한 모든 JavaScript 값을 전달`할 수 있음
    
    ```jsx
    export default function Profile() {
      return (
        <Card>
          <Avatar
            size={100}
            person={{
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2'
            }}
          />
        </Card>
      );
    }
    ```
    

## 5. **Conditional Rendering**

1. `if`, `&&`, `? :` 연산자를 활용하면 **조건부 렌더링** 가능
    
    ```jsx
    function Item({ name, isPacked }) {
      return (
        <li className="item">
          {name} {isPacked && '✔'}
        </li>
      );
    }
    ```
    

## 6. **Rendering Lists**

1. JavaScript의 **filter**/ **map** 활용 시, **배열을 필터링**하거나 **구성요소를 보여줄 수 있음**
2. 각각의 배열 요소를 보여주기 위해서는 반드시 **key**가 필요함
3. `key`
    1. key를 통해 `원하는 정보`를 얻을 수 있음
    2. 리스트가 변하더라도 key를 통해 `데이터 위치 추적 가능`
    
    ```jsx
     const listItems = people.map(person =>
        <li key={person.id}>
          <img
            src={getImageUrl(person)}
            alt={person.name}
          />
          <p>
            <b>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
          </p>
        </li>
      );
    ```
    

## 7. **Keeping Components Pure**

1. `순수함수`
    1. 자신의 고유한 일 상기: **호출 전 존재했던 어떤 객체나 변수도 변화시키지 않음**
    2. 같은 input & output: **동일한 input**을 넣었다면, 그에 대해 **동일한 output**을 반환함
    
    ![스크린샷 2024-04-25 오후 5.04.02.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/874b90e7-17be-4b1d-8d43-cdea8ef64847/a371af44-ee31-4679-8943-70cac638b338/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-04-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_5.04.02.png)
    
2. 순수함수로 **엄격한 컴포넌트** 구현
    1. 코드의 양이 증가하더라도, **버그나 예상치 못한 동작 예방 가능**

## 8. **Your UI as a Tree**

1. React는 컴포넌트/ 모듈 간 관계를 `트리구조`로 모델링함
     ![트리구조](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fpreserving_state_dom_tree.png&w=1920&q=75)
2. `컴포넌트 트리구조`
    1. 트리 **꼭대기**에 가까울수록, **상위 컴포넌트**
    2. **자식 컴포넌트가 없다면**, **leaf 컴포넌트**로 나타냄
    
    ![컴포넌트 트리구조](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fconditional_render_tree.png&w=1200&q=75)
    

1. `모듈 트리구조`
    1. **종속성 트리**: 클라이언트가 **다운로드하고 렌더링한 관련 JS 코드**를 묶기 위해 자주 사용함
    2. **번들의 크기가 클수록, 사용자 경험이 저하됨**
    
    ![모듈 트리구조](https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Fmodule_dependency_tree.png&w=1920&q=75)