

//若输入框为空，阻止表单的提交
function check() {
    // 全局变量a和b，分别获取用户框和密码框的value值
    let a = document.getElementsByTagName("input")[0].value;
    let b = document.getElementsByTagName("input")[1].value;
    if (!a && !b) { //用户框value值和密码框value值都为空‘
        alert("请输入用户名和密码！")
        return false; //只有返回true表单才会提交
    } else if (!a) { //用户框value值为空
        alert("请输入用户名")
        return false;
    } else if (!b) { //密码框value值为空
        alert("请输入密码！")
        return false;

    } else {
        var data=JSON.stringify({"userName":a,"password":b});
        var xml=new XMLHttpRequest();
        xml.open("POST","/user/register",true);
        xml.setRequestHeader("Content-type","application/json;charset-UTF-8");
        xml.send(data);
        alert("注册成功，请登录！");
        xml.onreadystatechange = function(){
            if (xml.readyState === 4 && xml.status === 200) {
                var res = xml.responseText;
                var json = eval("("+res+")");
                let status = json.status;
                let details=json.details;
                if (status === "success") {
                    window.open("/login","_self");
                }
                else{
                    alert(details);
                }
            }
        }
        return true;
    }
}
