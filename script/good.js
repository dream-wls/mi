
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


var id = valueByName(location.search,"id");

//数据渲染
$.ajax({
    type:'get',
    url: '../data/goodsIteam.json',
    dataType:'json',
    success: function(json) {
        // 更改图片

        // img-box
        for(let i=0;i<json.length;i++){
            if(json[i].id == id){
                let myjson = json[i];
                //判断选择的是哪个
                var optionLis = $('.my-option-li .option-li');
                // console.log(optionLis);
                for(let j=0;j<optionLis.length;j++){
                    // console.log(optionLis[j]);
                    if( $(optionLis[j]).hasClass('active')){
                        // 然后我们进行数据的渲染
                        // myjson[j];
                        
                        $('.product-con h2').text(myjson[j].title);
                        $('.sale-desc').html(`
                         <span class="sale-desc-red">
                            ${myjson[j].tip1}
                         </span>
                         ${myjson[j].tip2}
                        `);

                        //更改右边图片
                        var imgArrs = $('.img-box img');
                        for(let n=0;n<imgArrs.length;n++){
                            // imgArrs[n]
                            // imgUrl
                            myjson[j].imgUrl;
                            imgArrs[n].src = myjson[j].imgUrl[n];
                        }
                         

                    }
                }
            }
        }
        
        //更改标题
        // $('h2').text('');
        // $('.sale-desc-red').text('');
        // $('.sale-desc').text('');

    },
    error: function() {
        alert('请求失败');
    }
})

//点击事件
$('.my-option-li').on('click','.3option-li',function(e){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');


    $.ajax({
        type:'get',
        url: '../data/goodsIteam.json',
        dataType:'json',
        success: function(json) {
            // 更改图片
    
            // img-box
            for(let i=0;i<json.length;i++){
                if(json[i].id == id){
                    let myjson = json[i];
                    //判断选择的是哪个
                    var optionLis = $('.my-option-li .option-li');
                    // console.log(optionLis);
                    for(let j=0;j<optionLis.length;j++){
                        // console.log(optionLis[j]);
                        console.log($(optionLis[j]).hasClass('active'));
                        if( $(optionLis[j]).hasClass('active')){
                            // 然后我们进行数据的渲染
                            // myjson[j];
                            
                            $('.product-con h2').text(myjson[j].title);
                            $('.sale-desc').html(`
                             <span class="sale-desc-red">
                                ${myjson[j].tip1}
                             </span>
                             ${myjson[j].tip2}
                            `);
    
                           
                             
    
                        }
                    }
                }
            }
            
            //更改标题
            // $('h2').text('');
            // $('.sale-desc-red').text('');
            // $('.sale-desc').text('');
    
        },
        error: function() {
            alert('请求失败');
        }
    })

})


function valueByName(search, name) {
    var start = search.indexOf(name + "=");
    if (start == -1) {
        return null;
    } else {
        var end = search.indexOf("&", start);
        if (end == -1) {
            end = search.length;
        }
        //提取出想要键值对 name=value
        var str = search.substring(start, end);
        var arr = str.split("=");
        return arr[1];
    }
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

        $(".endtime").find("span").eq(0).html( `${hours}`);
        $(".endtime").find("span").eq(1).html( `${min}`);
        $(".endtime").find("span").eq(2).html( `${sec}`);
    }
    setInterval(() => {
        timer();
    }, 1000);

