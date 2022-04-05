// 0번째 tab 누르면
// - 모든 탭의 orange클래스명 제거
// - 0번째 탭에 orange 클래스 추가
// -모든 tab-content에 show클래스 제거
// - 0 번째 content에 show클래스 추가

for (let i = 0; i< $('.tab-button').length; i++){
    var 버튼 = $('.tab-button');
    var 내용 = $('.tab-content')
    버튼.eq(i).on('click', function(){
    버튼.removeClass('orange');
    버튼.eq(i).addClass('orange');
    내용.removeClass('show');
    내용.eq(i).addClass('show');
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


