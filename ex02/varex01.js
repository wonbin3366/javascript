let n1 = 1;
let d1 = 1.5;
let b1 = true;
let c1 = "가";
let arr = [1, 2, "가"]; // let arr = []; 배열선언 초기화
let user = { // 오브젝트(객체),자바로치면 클래스
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    hobby: ["농구", "축구"],
    account: {
        id: 1122,
        password: 8087,
        balance: 50000
    }
};

console.log("n1 : " + n1);
console.log("n1 : ", n1);
console.log(`n1값은 ${n1} 입니다.`);
console.log(user.id);
console.log(user.hobby[1]);