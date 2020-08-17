

//获取
// var btn_l = document.querySelector('.login-tal-l');
// var btn_r = document.querySelector('.login-tal-r');

// btn_l.onclick = function() {
//     this.className 
// }
$('.login-tal-l').click(function() {
    $(this).addClass('select');
    // 点击后插入节点
    // $('.login-contentbox').html(`


    // `);

})
$('.login-contentbox').on('click','.login-tal-l',function(e) {
    console.log(e);
    //
    $(this).find('.login-tal-r').removeClass('select');
    $(e).addClass('select');
    // $(this).find('form-login').attr('display','display');
    // $(this).find('form-login').attr('display','display');
    $(this).find('.form-login').empty(); 

    $('.form-login').html(`
    <div class="acountLogin">
    <div class="input1">
        <input class="form-login-count" type="text" placeholder="邮箱/手机号码小米ID" > 
    </div>
    <div class="input2">
        <input class="form-login-pw" type="text" placeholder="密码"> 
    </div>
     
    <div class="form-login-et">
        <a href="#" class="login-enter">登录</a>
    </div>
    <a class="form-callregin"  href="javascript:void(0)">手机短信登录/注册</a>
    <div class="form-myreg">
        <a class="form-register" href="javascript:void(0)">立即注册</a>
        |
        <a class="form-forget_pw" href="javascript:void(0)">忘记密码?</a>
    </div>
    <div class="login-txt">
        其他方式登录
    </div>
  <div class="type-link">
        <a class="type-link-qq" href="javascript:void(0)"><i class="type-i-qq"></i></a>
        <a class="type-link-wb" href="javascript:void(0)"><i class="type-i-wb"></i></a>
        <a class="type-link-zfb" href="javascript:void(0)"><i class="type-i-zfb"></i></a>
        <a class="type-link-wx" href="javascript:void(0)"><i class="type-i-wx"></i></a>
    </div>
</div>
    `);
})
$('.login-contentbox').on('click','.login-tal-r',function(e) {
    console.log(e);
    $(e).addClass('select');
    $(this).find('.login-tal-l').removeClass('select');
    $(this).find('.form-login').empty(); 
    $('.form-login').html(`
    <div class="twocode">
    </div>
    <div class="sub_txt">
        <p>使用<span>小米商城APP</span>扫一扫</p>
        <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
    </div>
    `);
})