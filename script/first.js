// import './swiper.js'
export default function fn1(){
    // 获取li元素
    $('.head-buyC').mouseenter(function() {
        $(this).find('.head-buy-menu').stop(true).slideDown(300);

    })
    $('.head-buyC').mouseleave(function() {
        $(this).find('.head-buy-menu').stop(true).slideUp(300);
    })

    //这个地方是上面的banner
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
        var target = new Date("2020/9/5");    
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
    // flashBtnL.
    // 注册点击事件
    var width = 0;
        $('.flashbuy-title').on('click','.flashbuy-btn-l',function() {
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
            width += 978;
            if(width > 1956) {
                width = 1956;
            }
            $('.flashlist').animate({
                scrollLeft:width,
            },1000);
        })
}
    //侧边栏的渲染
    $.ajax({
        url:"../data/nav.json",
        type:"get",
        dataType:"json",
        success: function(json){
            var sideNavArr = json.sideNav ;
            //获取侧边栏
            //循环数组
            var sideBarLis= $('.sideBar').children();
            for(let i=0;i<sideNavArr.length;i++) {
                var sideNavUl= $('.sideBar li .sideNav');
                //这个地方是每一大块的列表
                //创建节点
                var sideNavNode = $(`<div class="sideNav"> </div>`);
                // 把它插入到li中
                $(sideBarLis[i]).append(sideNavNode);
                //我们设置样式
                let width =0;
                width=0;
                //创建多少个ul
                var col = Math.ceil(sideNavArr[i].child.length / 6);
                let m = 0;
                for(let n=0; n<col;n++){
                    //创建col个ul插入进去
                    let ulNode = $(`<ul class="sideNav-ul"></ul>`);
                    width += 250;
                    for(var k = 0;k < 6; k++){
                        var newLi = $(`
                        <li>
                            <a href="javascript:void(0)">
                                <img src="${ sideNavArr[i].child[m].img }" alt="">
                                <span>${ sideNavArr[i].child[m].title } </span>
                            </a>
                        </li>
                        `);
                        ulNode.append(newLi);
                       sideNavNode.append(ulNode);
                        m++;
                        if(m >= sideNavArr[i].child.length){
                            break;
                        }
                    }

                    
                } 
                //把父元素的宽度设置为width
                $('.sideNav').eq(i).css('width',width+'px');
               
            }
 

        }
    })

    

    //上面栏的渲染
    //获取li元素
    //这个是上面导航栏上的 li元素
    var myLis = $('.nav-item');
    console.log(myLis);
    // 给每一个li注册事件
    for(let i = 0;i< myLis.length;i++) {
        myLis.eq(i).attr('id',i);
        $('.nav-ul').on('mouseover','.nav-ul',function(e) {
            // 显示对象的下拉列表
            $('.header-nav-menu').css('display','block');
            // console.log('000000000',$(e));
        });
        $('.nav-ul').on('mouseleave','.nav-ul',function() {
            // 显示对象的下拉列表
            $('.header-nav-menu').css('display','none');
        });
    }

    //导航栏下滑的动画
    $('.nav-ul').on('mouseenter','.nav-item-my',function() {
        $('.header-nav-menu').stop(true).slideDown(500);
    })
    $('.nav-ul').on('mouseleave','.nav-item-my',function() {
        $('.header-nav-menu').stop(true).slideUp(500);
    })
    

//渲染数据
    $('.nav-ul').on('mouseover','.nav-item',function(e) {
        console.log('id',$(this).attr('id'));
        let index = Number($(this).attr('id'));
        // 显示对象的下拉列表
        $.ajax({
            url: "../data/nav.json",
            type: "get",
            dataType: "json",
            success: function(json) {
                var topNav = json.topNav;
                console.log(topNav);
                // 这个地方是每个ul
                // for(let n = 0;n < topNav.length;n++){
                    //遍历每一个li
                    var newNodeUl = $(`<ul></ul>`);
                    for(let m = 0;m < topNav[index].childs.length;m++) {
                        // console.log('topNav[j].childs',topNav[j].childs);
                        var newNode = $(`
                            <li>
                                <a class="item-children" href="javascript:void(0)">
                                    <div class="children-img"><img src="${topNav[index].childs[m].img}" alt=""></div>
                                    <div class="children-title">${topNav[index].childs[m].a}</div>
                                    <p class="children-price">${topNav[index].childs[m].i}</p>
                                </a>
                            </li>
                        `);
                        // 把每个Li插入到ul中
                        newNodeUl.append(newNode);
                    }
                    $('.header-menu-box').empty();
                    $('.header-menu-box').append(newNodeUl);
            }
        })
    });

    //当选框获取到焦点的时候
    $('.search').on('focus','.text',function() {
        $('.text').css('border','1px solid #ff6700');
        $('.text').css('border-right','none');
        $('.button').css('border','1px solid #ff6700');
    })

    //当选框失去焦点的时候
    $('.search').on('blur','.text',function() {
        $('.text').css('border','1px solid #afafaf');
        $('.text').css('border-right','none');
        $('.button').css('border','1px solid #afafaf');
    })

    //使用百度的请求 当在选框中进行输入的时候
    $('.search').on('focus','.text',function() {


        console.log('ajax');
        // 进行ajax请求
        $.ajax({
            url:"http://suggestion.baidu.com/su",
            menthod: "get",
            data: 'wd=' + $(this).val(),
            dataType: "jsonp",
            jsonp: "cb",
            success: function() {
                //创建一个节点
                var searchStr = "";
                for(var i =0;i < data.s.length;i++) {
                    searchStr +=`
                    <li href="http://www.baidu.com">
                        ${data.s[i]}
                    </li>
                    `
                }
                $(".search-ul").html(searchStr);
            },
            error: function() {
                console.log('请求失败');
            }
        })
    });



   

        






 

 