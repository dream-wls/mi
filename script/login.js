

//获取
// var btn_l = document.querySelector('.login-tal-l');
// var btn_r = document.querySelector('.login-tal-r');

// btn_l.onclick = function() {
//     this.className 
// }
$('.login-tal-l').click(function() {
    $(this).addClass('select');
    // 点击后插入节点
    $('.login-contentbox').html(`
    
    
    `);
})
$('.login-tal-r').click(function() {
    $(this).addClass('select');
    $('.login-contentbox').html(`
     
    `);
})