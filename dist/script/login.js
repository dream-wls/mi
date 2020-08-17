

//获取
// var btn_l = document.querySelector('.login-tal-l');
// var btn_r = document.querySelector('.login-tal-r');

// btn_l.onclick = function() {
//     this.className 
// }
$('.login-tal-l').addClass('select');
 
$('.login-contentbox').on('click','.login-tal-l',function(e) {
    $(this).closest('.login-contentbox').find('.login-tal-r').removeClass('select');
    $('.login-tal-l').addClass('select');
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
    //移除左边按钮颜色
    $(this).closest('.login-contentbox').find('.login-tal-l').removeClass('select');
    //右边添加颜色    
    $('.login-tal-r').addClass('select');
    $(this).find('.form-login').empty(); 
    $('.form-login').html(`
    <div class="twocode">
    </div>
    <div class="sub_txt">
        <p>使用<span>小米商城APP</span>扫一扫</p>
        <p>小米手机可打开「设置」>「小米帐号」扫码登录</p>
    </div>
    `);
});

//给登录按钮注册点击事件
$('.form-login-et').on('click','.login-enter',function(e){
    // 获取账号密码
    var username = $('.form-login-count').val();
    var password = $('.form-login-pw').val();
    if(!username || !password){
        alert('用户名或者密码不能为空~');
        return;
    }
    
    console.log(username);
    console.log(password);
    // 请求数据
    $.ajax({
        url: "../data/user.json",
        type: "get",
        dataType:"json",
        success: function(json) {
            console.log(json);
            console.log(json.username);
            console.log(json.password);
            
            if(username == json.username && username == json.username){
                console.log('输入正确');
                //跳转页面
                window.location.href='../pages/index.html';
            }else{
                alert('密码或者账号有误~');
            }
        },
        error: function() {
            alert('请求失败');
        }
    });

});

