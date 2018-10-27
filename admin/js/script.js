$(document).ready(function (){
	//随机生成验证码
		function change() {
			//获取包裹验证码的div元素
			var verCode = document.getElementById('verCode');
			//框定验证码的取值范围
			var strRange = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
			//定义一个值为空的变量yzm，用来保存随后生成的验证码
			var result = '';
			//随机生成4位验证码
			for (var i = 0; i < 4 ; i++) {
				var ran = Math.round(Math.random()* 61);
				var char = strRange[ran];
				//避免生成相同的字符
				if(result.toLowerCase().indexOf(char.toLowerCase()) > -1){
					i--;
					continue;
				}
				result += char;
			}
			//将生成的验证码插入div中
			verCode.innerHTML = result;
		}
		change();
		verCode.onclick = change;


	//表单验证
	$('input[name="login_btn"]').click(function(){
		var $name = $('input[name="adminName"]');
		var $psw = $('input[name="password"]');
		var $verify = $('input[name="verify"]');
		var $nameInfo = $(".nameInfo");
		var $pswInfo = $(".pswInfo");
		var $verifyInfo = $(".verifyInfo");
		var _name = $.trim($name.val());
		var _psw = $.trim($psw.val());
		var _verify = $.trim($verify.val());
		if(_name == "") {
			$nameInfo.text("用户名不能为空！");
			$name.focus();
			return;
		}else{
			$nameInfo.text("");
		}
		
		if(_psw == "") {
			$pswInfo.text("密码不能为空！");
			$psw.focus();
			return;
		}else{
			$pswInfo.text("");
		}

		if(_verify == "") {
			$verifyInfo.text("请输入验证码！");
			$verify.focus();
			return;
		}else{
			$verifyInfo.text("");
		}

	})
})