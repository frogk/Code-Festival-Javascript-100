/* 01. 배열의 삭제 */

var nums = [100, 200, 300, 400, 500];
var spliceNums = nums.splice(3, 2);
console.log(nums)
/* [100, 200, 300] */

/* 02. 배열의 내장함수 */

var arr = [200, 100, 300];
var arrAdd = arr.splice(2, 0, 10000)
console.log(arr);
/* [200, 100, 10000, 300] */

/* 03. 변수의 타입 */
var arr = [100, 200, 300];
console.log(typeof(arr))
/* object */

/* 04. 변수의 타입2 */
console.log(typeof(2.22))
/* number */

/* 05. for문 계산 */
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
  a += i;
}

console.log(a+b)

/* 16 */

/* 06. False */
/* 1 */

/* 07. 변수명 */
/* 2, 4 */

/* 08. 객체의 키 이름 중복 */
var d = {
  'height':180,
  'weight':78,
  'weight':84,
  'temperature':36,
  'eyesight':1
};

console.log(d['weight'])
/* 84 */

/* 09. concat을 활용한 출력 방법 */

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second)

console.log(result)

/* 10. 별 찍기 */

const n = prompt('숫자입력하기')
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=i*2-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);