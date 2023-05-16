"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var module_file_1 = require("./module-file");
// ts는 모듈 방식을 가지고 있다.DD
var dj_1 = require("./dj");
console.log((0, dj_1.default)('안녕하세요'));
console.log(module_file_1.data);
var a = 1;
var b = 2;
// 너 지금 변수의 타입이 어것이 맞는지 확인을 바라는 것이다.
// 이거 아직 불안정한 코드인거 같아
// 리턴값도 타입을 지정해줄수 있다.
function c(a, b) {
    return a + b;
}
// void == 회피 하다 , 리턴값이 없고 실행함수이다.
// 타입세이프티 => 내가 허락한 타입들만 허락을 한다.
function moreFuntion() {
    console.log("hi");
}
// 문자열을 넣어 보면 아까 정한 타입이 아니여서 에러를 발생 시킨다.
console.log(c('a', b));
