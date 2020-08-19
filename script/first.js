// import './swiper.js'
export default function fn1(){
    // 获取li元素
   console.log('dfgdrg');
    console.log( $('.head-buyC'));
    $('.head-buyC').mouseenter(function() {
        console.log($(this).find('.head-buy-menu'));
        $(this).find('.head-buy-menu').stop(true).slideDown(300);

    })
    $('.head-buyC').mouseleave(function() {
        $(this).find('.head-buy-menu').stop(true).slideUp(300);
    })

    //这个地方是上面的banner
   console.log($('.nav-item'));
    $('.nav-c').on('mouseenter','.nav-item',function() {
        $(this).find('.header-nav-menu').stop(true).slideDown(300);
    })
    $('.nav-c').on('mouseleave','.nav-item',function() {
        $(this).find('.header-nav-menu').stop(true).slideUp(300);
    })



    //banner 图的功能
    
    //小米倒计时
    



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

    //轮播图
    //按钮
    var flashBtnL =$('.flashbuy-btn-l');
    var flashBtnR =$('.flashbuy-btn-r');

    var flashbox = $('.flashbox');
    console.log($('.flashbox'));
    // flashBtnL.
    // 注册点击事件
    var width = 0;
        $('.flashbuy-title').on('click','.flashbuy-btn-l',function() {
            console.log('左边按钮');
            if(width ==0){

            }
            width -= 978;
            if(width <= 0) {
                width = 0;
            }
            $('.flashlist').animate({
                scrollLeft: width,
            },1000);

        })
        $('.flashbuy-title').on('click','.flashbuy-btn-r',function() {
            console.log('右边按钮');
            width += 978;
            if(width > 1956) {
                width = 1956;
            }
            $('.flashlist').animate({
                scrollLeft:width,
            },1000);

        })



        





}
 


// // 获取li元素
// console.log( $('.right ul li'));
// $('.right ul li').mouseenter(function() {
//     $(this).find('.right-list').stop(true).slideDown(300);
// })
                                                       
// $('.right ul li').mouseleave(function() {
//     $(this).find('.right-list').stop(true).slideUp(300);
// })