$(document).ready(function() {
    //打开页面3s后弹出兴趣选择框
    setTimeout(() => {
        $('.choose').css('display','block');
    }, 3000);
    //点击关闭按钮关闭兴趣选择框
    $('.close').click(function(){
        $('.choose').css('display','none');
    })
})