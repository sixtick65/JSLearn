// @ts-check

console.log('hello world');

// 선언
// var, let, const

// 자료형
// number, string, boolean, null, undefined, object, symbol, bigint

// 연산자
// 산술, 비트, 논리, 대입, 증감, 비교, 삼항, 

// 조건문
// if, else, switch, case, default, break

// 반복문
// for, while, do while, continue, for in, for of

// 함수 
// function, () => , return, 클로저 closure, ...나머지매개변수, 디폴트 매개변수
console.log( (() => 1+1)() ); // 중괄호를 생략할경우 기본적으로 리턴이 붙는다 // 2
console.log( (() => {1+1;})() ); // 블록으로감쌀경우 코드 그대로 읽는다. // undefined

// 문서화 // @ts-check
// jsdoc, /** */, @param, @returns, @description, @example @throws, @deprecated, @see, @readonly

/**
 * 타이틀
 * @description 테스트 함수
 * @param {number} a 
 * @returns {number}
 * @throws {Error} 파라미터에 값을 꼭 넘겨줘야함
 * @example 
 * abc(1)
 */
function abc(a){
    if(a == null) throw Error('empty');
    return a;
}
// abc('1'); // 파일 최상단에 '// @ts-check' 를 선언하면 타입에러 코드에 빨간줄을 띄운다

// 이벤트, 콜백 (EventTarget를 상속받은 객체)
// addEventListener

// 탬플릿 문자열 `${}`
// 예시> `안녕 나는 ${name}야`
// 엔터를 표현 할 수 있다. 

// 객체 object {}
// 객체.프로퍼티 : 프로퍼티 생성
// delete 객체.프로퍼티 : 프로퍼티 삭제
// 동적 프로퍼티 []


// 배열 구조분해 할당, 객체 구조분해 할당
// cosnt [a, ...arr] = [1,2,3,4,5];
// const {a, ...arr} = {a : 1, b : 2, c : 3};

// 프로미스 promise, 콜백의 단점을 보완, 비동기 콜백처리, 체이닝방식
// async await, 프로미스를 더 깔끔하게 보여줌, 절차방식