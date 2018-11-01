window.onload = function(){
    var userLogin = document.getElementById('userLogin');
    var phoneLogin = document.getElementById('phoneLogin');
    var underline = document.getElementById('underline');
    var userWay = document.getElementById('user_way');
    var phoneWay = document.getElementById('phone_way');
    userLogin.onclick = function(){
        userLogin.style.color = '#35AE35';
        phoneLogin.style.color = '#000';
        underline.style.marginLeft = '0'; 
        userWay.style.display = 'block';
        phoneWay.style.display = 'none';
        document.getElementById('forgotTxt').innerHTML = '忘记密码？';
    }
    phoneLogin.onclick = function(){
        userLogin.style.color = '#000';
        phoneLogin.style.color = '#35AE35';
        underline.style.marginLeft = '205px';
        userWay.style.display = 'none';
        phoneWay.style.display = 'block';
        document.getElementById('forgotTxt').innerHTML = '';
    }
    //点击获取验证码后倒计时
    var btn = document.getElementById('btn');
    var clock = '';	
    var nums = 60;	
    var btn;
    btn.onclick = function (){	
        btn.style.disabled = true; //将按钮置为不可点击		
        btn.value = nums +'秒后可重新获取';		
        clock = setInterval(doLoop, 1000); //一秒执行一次	
    }
        
    function doLoop(){		
        nums--;		
        if(nums > 0){			
            btn.value = nums+'秒后可重新获取';		
        }else{			
            clearInterval(clock); //清除js定时器			
            btn.disabled = false;			
            btn.value = '点击发送动态码';			
            nums = 60; //重置时间		
            }	
    }
}