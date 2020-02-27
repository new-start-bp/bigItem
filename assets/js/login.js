$(function(){
    var form = layui.form;
    var layer=layui.layer;
    $('#link-reg').on('click',function(){
        $('.log').hide()
        $('.reg').show()
      
    });
    $('#link-log').on('click',function(){
        $('.reg').hide()
        $('.log').show()
    });

   
    form.verify({
        // 键：值
        //因为要验证的是密码的长度
        //所有 把pwd放到reg盒子里的name是password里， 
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],

        samePwd: function (value) {
          // 1. 通过形参，获取到确认密码框中的值
          // 2. 通过 jQuery 获取到密码框中的值
          var pwd = $('.reg-box [name=password]').val()
          // 3. 进行 if 判断
          if (value !== pwd) {
            // return 一个错误消息
            return '两次的密码不一致！'
          }
        }
      });

      $('#form-reg').on('submit',function(e){
          e.preventDefault();
          $.ajax({
              type:'post',
              url:'http://www.liulongbin.top:8086',
              data:$(this).serialize(),
              success:function(res){
                if(res.status!=1)
                {
                   
                }
                location.href='/index.html'
              }
          })
    }); 



    $('#form-log').on('submit',function(e){
        e.preventDefault();
        $.ajax({
            type:post,
            url:'http://www.liulongbin.top:8086',
            data:$(this).serialize(),
            success:function(){

            }
        })

  }); 


})