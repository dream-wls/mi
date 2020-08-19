console.log('good.js');

// 获取按钮
var number = $('.swiper-page-box span')

var myimg = $('.img-box img');
var index = 0;
$('.swiper-page-box').on('click','.swiper-btn',function(e) {
    index = $(this).index();
    $('.img-box img').eq(index).css('opacity','1').siblings().css('opacity','0');
})
 
setInterval(() => {
    $('.img-box img').eq(index).css('opacity','1').siblings().css('opacity','0');
    index ++;
    if(index >= $('.img-box img').length){
        index =0;
    }
}, 2000);

//数据渲染
$.ajax()