$(document).ready(function() {
    //打开页面3s后弹出兴趣选择框
    setTimeout(() => {
        $('.choose').css('display','block');
    }, 3000);
    //点击关闭按钮关闭兴趣选择框
    $('.close').click(function(){
        $('.choose').css('display','none');
    })
    
    //获取选择的城市,并将城市赋值给当前城市
    $("#submit_city").click(function(){
        var province = $("#eprovinceName").find("option:selected").text();  
        var city = $("#ecityName").find("option:selected").text();  
        var district = $("#edistrictName").find("option:selected").text();  
        $('.city_name').text(district);
        $('#distpicker').css('display','none');
    });

    //点击取消选择城市隐藏选择框
    $('#cancel_city').click(function(){
        $('#distpicker').css('display','none');
    })

    //点击切换城市显示城市选择框
    $('#city_btn').click(function(){
        $('#distpicker').css('display','block');
    })

    
})