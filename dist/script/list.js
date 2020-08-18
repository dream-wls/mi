

//下面的banner部分
// 获取两个按钮

var mydotl = $('.pagers .pager-btn-l');
var mydotr = $('.pagers .pager-btn-r');
console.log(mydotl);
console.log(mydotr);

var wrapper = $('.xm-recommend-wrapper');
console.log(wrapper);
// 注册点击事件
$('.xmpagers').on('click','.pager-btn-l',function() {
    //添加类名
    mydotl.addClass('pagers-active');
    //清除另一个按钮的类名
    mydotr.removeClass('pagers-active');
    $('.myrecommend-content').animate({
        scrollLeft:0,
    },500);

})


// 注册点击事件
$('.xmpagers').on('click','.pager-btn-r',function() {
    //添加类名
    mydotr.addClass('pagers-active');
    //清除另一个按钮的类名
    mydotl.removeClass('pagers-active');
    $('.myrecommend-content').animate({
        scrollLeft:1226,
    },500);
})