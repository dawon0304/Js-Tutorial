var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];  


  
  // 카드레이아웃3개 만들기
  // var 템플릿 = 
  // `<div class="col-sm-4">
  //       <img src="https://via.placeholder.com/600" class="w-100">
  //       <h5>${products[0].title}</h5>
  //       <p>가격 : ${products[0].price }</p>
  //     </div>`
  //     $('.row').append(템플릿)

  //     var 템플릿 = 
  // `<div class="col-sm-4">
  //       <img src="https://via.placeholder.com/600" class="w-100">
  //       <h5>${products[1].title}</h5>
  //       <p>가격 : ${products[1].price }</p>
  //     </div>`
  //     $('.row').append(템플릿)


  //     var 템플릿 = 
  // `<div class="col-sm-4">
  //       <img src="https://via.placeholder.com/600" class="w-100">
  //       <h5>${products[2].title}</h5>
  //       <p>가격 : ${products[2].price }</p>
  //     </div>`
  //     $('.row').append(템플릿)


  // 반복문으로 간단하게 만들어주기
  products.forEach((a, i) => {
    var 템플릿 = 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${products[i].title}</h5>
        <p>가격 : ${products[i].price }</p>
      </div>`
      $('.row').append(템플릿)
  })

  