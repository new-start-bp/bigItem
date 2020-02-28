$.ajaxPrefilte(function(option){
    // option就是大家调用$.get,$.ajax的时候
    //提供的那个配置对象
    // $.ajax({
    //     type:'post',
    //     url:'http://www.liulongbin.top:3007/api/reguser',
    //     data:$(this).serialize(),
    // })
    //===============
    //console.log(option)
    //========================
    // {
    //     type:'post',
    //     url:'http://www.liulongbin.top:3007/api/reguser',
    //     data:$(this).serialize(),
    // }
    option.url='http://www.liulongbin.top:3007'+option.url
})


//放在jQuery之后，自己的js之前