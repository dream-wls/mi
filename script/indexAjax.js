$.ajax({
    type: 'get',
    url:'../data/nav.json',
    dataType:'json',
    cache:false,
    success:function(json){
        // console.log(json.topNav);
        var topNav = json.topNav;
        // topNav.push({title: "服务"},{title: "社区"});
        console.log(topNav);
        for(var i = 0; i < topNav.length; i++){
            // console.log(topNav[i].title);
            // console.log(topNav[i].childs);
            console.log(topNav.length);
            console.log('========');
            console.log($('.nav-ul'));
            console.log(topNav[i].title);
            $(`<li class="nav-item">
                    <a class="nav-item-my" href="javascript:void(0)">
                        ${topNav[i].title}
                    </a>
                </li>
            `).appendTo(".nav-c .nav-ul");
            console.log(topNav[i].title);
            var topNavChildsArr = topNav[i].childs;
            //创建一个节点
            var node = $(`
                
            `);
            for(var j = 0; j < topNavChildsArr.length; j++){
               
                // console.log(topNavChildsArr[i]);
                if(topNav[j].childs){
                                var childsArr = topNav[j].childs;
                                for(var n = 0; n < childsArr.length; n++){
                                    // console.log(childsArr[j].id);
                                    // console.log(childsArr[j].a);
                                    // console.log(childsArr[j].i);
                                    // console.log('------------');
                                }
                            }

            }
            
        }
        // $.each(topNav,function(i,item){
        //     //这个地方是打印了每个nav中的数据
        //     var myitem = item;
        //     console.log(myitem);
        //     $.each(myitem,function(i,myitems) {
        //         // console.log(myitems);
        //         // console.log(myitem['title']);
        //         // 我们进行判断 标题判断
        //         // 鼠标滑到相应的li上
        //         // $('.header-nav-menu ul')
        //         // $('.nav-item a')
        //         console.log($('.nav-item .nav-item-my').text());
        //         if($('.nav-item .nav-item-my').text() == myitem['title']) {
        //             console.log('sfds');
        //             // console.log($('.nav-item .nav-item-my'));
        //             // 然后插入
        //             // console.log($('.header-nav-menu ul'));
        //             // $('.header-nav-menu');

        //         }
        //     })
        //     // console.log(myitem['childs']);
        //     // $.each(myitem['childs'],function(i,myitem){
        //         // $('.children-img img').attr('src',myitem['img']);
        //         // $('.children-title').text('myitem');
        //         // console.log(myitem);
        //         // $('.children-title').text(myitem.a);
        //         //里面有多少个进行循环
        //         // console.log(this.childs);
        //         // $('.children-price').text(myitem['i']);
        //         // console.log('a');
        //         // console.log(myitem['a']);
        //         // console.log('i');

        //         // console.log(myitem['i']);
             
        //     // })
        //     // $.each(myitem ,function(i,goods) {
            
        //     //     // 这个地方要进行判断一下
        //     //     // console.log(goods);
        //     //     // console.log(goods[1]);
        //     //     // $.each(goods,function(i,mgoods) {
        //     //     //     // 这个地方要进行判断一下
    
        //     //     //     // console.log(goods);
        //     //         // console.log(mgoods);
        //     //     // })

        //     // })

        // });

    },
    error: function(){
        alert('请求失败');
    }
})