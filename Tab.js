// 0번째 tab 누르면
// - 모든 탭의 orange클래스명 제거
// - 0번째 탭에 orange 클래스 추가
// -모든 tab-content에 show클래스 제거
// - 0 번째 content에 show클래스 추가

// for 이용한 반복문으로 tab기능 만들기
// for (let i = 0; i< $('.tab-button').length; i++){
//     탭열기(i)
// }

// 
$('.list').click(function (e) {
  if (e.target == document.querySelectorAll('.tab-button')[0]) {
    탭열기(0)
  }
  if (e.target == document.querySelectorAll('.tab-button')[1]) {
    탭열기(1)
  }
  if (e.target == document.querySelectorAll('.tab-button')[2]) {
    탭열기(2)
  }
})


function 탭열기(숫자) {
  var 버튼 = $('.tab-button');
  var 내용 = $('.tab-content')
  버튼.eq(숫자).on('click', function () {
    버튼.removeClass('orange');
    버튼.eq(숫자).addClass('orange');
    내용.removeClass('show');
    내용.eq(숫자).addClass('show');
  })
}


// $('.tab-button').eq(1).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(1).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(1).addClass('show');
// })

// $('.tab-button').eq(2).on('click', function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(2).addClass('orange');
//   $('.tab-content').removeClass('show');
//   $('.tab-content').eq(2).addClass('show');
// })


// 상세페이지 상품명/가격 변경 코드

var car2 = {
  name: '소나타',
  price: [50000, 3000, 40000]
}
document.querySelector('.card-title').innerHTML = car2.name;
document.querySelector('.card-price').innerHTML = car2.price[1];



// select 

var pants = [28,30, 32,34];
var shirths = [95, 100, 105];


document.querySelectorAll('.form-select')[0].addEventListener('input', function() {
  var user = this.value;
  if (user == '셔츠') {
    
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = "";
    shirths.forEach(function(a){
      $('.form-select').eq(1).append(`<option>${a}</option>`);
    })
  };

  if(user == '모자'){
    document.querySelectorAll('.form-select')[1].classList.add('form-hide');
  };

  if(user =='바지'){
    document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
    document.querySelectorAll('.form-select')[1].innerHTML = "";
    pants.forEach(function(a){
      $('.form-select').eq(1).append(`<option>${a}</option>`);
    });
  }
});


// object 자료 갯수만큼 반복문을 돌리려면 < for in 반복문>
var obj = {name: 'kim', age: 20}

for (var key in obj) {
  console.log(obj[key]);
  // kim, 20출력
}