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


    // mybanner();
    //banner 图的功能
    function mybanner(){
        let index = 0;
        //左右按钮的点击事件
        $('.icon').on('click','.icon-l',function() {
            index--;
            if(index < 0){
                index = 0;
            }
            $('.mybanner .swiper-slide').eq(index).css('opacity','1').siblings().css('opacity','0');
            $('.swiper-list a').eq(index).addClass('list-active');
            $('.swiper-list a').eq(index).siblings().removeClasss('list-active');
        })

        $('.icon').on('click','.icon-r',function() {
            var swiperL = $('.mybanner .swiper-slide').length;

            index++;
            console.log(index);
            if(index >= swiperL) {
                index = swiperL;
            }
            $('.mybanner .swiper-slide').eq(index).css('opacity','1').siblings().css('opacity','0');
            $('.swiper-list a').eq(index).addClass('list-active');
            $('.swiper-list a').eq(index).siblings().removeClass('list-active');

        })

        setInterval(() => {
            $('.img-box img').eq(index).css('opacity','1').siblings().css('opacity','0');
            index ++;
            if(index >= $('.img-box img').length){
                index =0;
            }
        }, 2000);

        //banner 图的数字按钮
        $('.swiper').on('click','.swiper-list li',function(e) {
            index = $(this).index();
            console.log($('.mybanner .swiper-slide').eq(index));
            $('.mybanner .swiper-slide').eq(index).css('opacity','1').siblings().css('opacity','0');

        }) 
    }
    banner();
    function banner() {
        let iNow = 0; //当前显示的图片的下标
        let aImgs = null; //记录图片
        let aBots = null; //记录小圆圈
        var timer = setInterval(function () {
            iNow++;
            tab();
        }, 2500)

        function tab() {

            if (!aImgs) {
                aImgs = $('.mybanner ').find('.swiper-slide');
            }
            if (!aBots) {
                aBots = $('.swiper-list li').find('a');
            }
            if (iNow >= aImgs.length) {
                iNow = 0;
            }
            // 图片切换
            aImgs.hide().css('opacity', 0.2).eq(iNow).show().animate({
                opacity: 1
            }, 1500)
            // 小圆圈切换
            aBots.removeClass('active').eq(iNow).addClass('active');
        }
        //控制鼠标移入移除动画
        $('.mybanner').mouseenter(function () {
            clearInterval(timer);
        });
        $('.mybanner').mouseleave(function () {
            timer = setInterval(function () {
                iNow++;
                tab();
            }, 2500)
        })

        // 点击小圆圈
        $('.swiper-list').on('click', '.list-active a', function () {
            console.log(111);
            iNow = $(this).index();
            // $('.swiper-list a').eq(iNow).addClass('list-active');
            // $('.swiper-list a').eq(iNow).siblings().removeClasss('list-active');
            tab();
            return false;
        })

        // 点击前后按钮进行轮播
        $('.icon-l,.icon-r').click(function () {
            clearInterval(timer);
            if (this.className == 'icon-l') {
                iNow--;
                if (iNow == -1) {
                    iNow = $('.mybanner ').find('.swiper-slide').length - 1;
                }
            } else {
                iNow++;
            }
            tab();
        })

    }


    
    
    //小米倒计时
    function timer() {
        var target = new Date("2020/8/21");    
        let d = new Date();
        let resHour = target.getHours();
        resHour = Number(resHour)
        let resMin = target.getMinutes();
        resMin = Number(resMin)
        let diffMinSecs = target.getTime() - d.getTime();
        let hours = parseInt(diffMinSecs / 1000 / 3600);
        hours = Number(hours);
        let min = parseInt(diffMinSecs % (1000 * 3600) / (1000 * 60));
        min = Number(min);
        let sec = parseInt(diffMinSecs % (1000 * 60) / 1000);
        sec = Number(sec);

        $(".time").find("span").eq(0).html( `${hours}`);
        $(".time").find("span").eq(1).html( `${min}`);
        $(".time").find("span").eq(2).html( `${sec}`);
    }
    setInterval(() => {
        timer();
    }, 1000);

 

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