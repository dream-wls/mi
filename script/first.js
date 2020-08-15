// import './swiper.js'
export default function fn1(){
    // 获取li元素
   console.log('dfgdrg');
    console.log( $('.head-buyC'));
    $('.head-buyC').mouseenter(function() {
        console.log($(this));
        console.log($(this).find('.head-buy-menu'));
        $(this).find('.head-buy-menu').stop(true).slideDown(300);

    })
    $('.head-buyC').mouseleave(function() {
        $(this).find('.head-buy-menu').stop(true).slideUp(300);
    })

    // var mySwiper = new Swiper('.swiper-container', {
    //     direction: 'vertical', // 垂直切换选项
    //     loop: true, // 循环模式选项
        
    //     // 如果需要分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
        
    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     }
      
    //   })  

  
}
 


// // 获取li元素
// console.log( $('.right ul li'));
// $('.right ul li').mouseenter(function() {
//     $(this).find('.right-list').stop(true).slideDown(300);
// })
                                                       
// $('.right ul li').mouseleave(function() {
//     $(this).find('.right-list').stop(true).slideUp(300);
// })