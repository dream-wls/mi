

//下面的banner部分
// 获取两个按钮

var mydotl = $('.pagers .pager-btn-l');
var mydotr = $('.pagers .pager-btn-r');
// console.log(mydotl);
// console.log(mydotr);

var wrapper = $('.xm-recommend-wrapper');
// console.log(wrapper);
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


//渲染商品
$.ajax({
    type: 'get',
    url:'../data/mygoodslist.json',
    dataType:'json',
    cache: false,
    success: function(json){
        console.log(json);
        // goods列表
        var node = $(`<div></div>`);
        for(var i= 0;i< json.length;i++) {
            $(`
                <div class="goods-item clearfix">
                    <div class="figure-img">
                        <a href="goods.html?id=${json[i].id}">
                            <img src="${json[i].imgUrl[0]}" alt="">
                        </a>
                    </div>
                    <p class="desc"></p>
                    <h2 class="title">${json[i].title}</h2>
                    <p class="price">${json[i].price}<del>199元</del></p>
                    <div class="thumbs">
                        <li>
                            <img src="${json[i].imgUrl[1]}" alt="">
                        </li>
                    </div>
                    <div class="flags">
                        <span>八折促销</span>
                    </div>
                    
                    <!-- 移动上去显示图标 -->
                    <div class="actions"></div>
                </div>
 
            `).appendTo(node);
            console.log(node);


        }
        (node).appendTo('.goods-list');
        // $('.goods-list').

    },
    error: function(){
        alert('请求失败');
    }
})