// js实现菜单折叠
var flag=true; //开关按钮
function show_menu(){
    var menu1 = document.getElementById("menu1");
    if(flag){
        menu1.style.display="block";
        flag = false;
    }else{
        menu1.style.display="none";
        flag = true;
    }
}

function show_menu1(){
    var menu1 = document.getElementById("menu1");
    menu1.style.display="none";
    flag = true; //鼠标离开时将flag默认回true
}

function toDetail(id){
    window.open("/goodDetail?id="+id,"_self")
}

function toTrolley(id){
    var user=localStorage.getItem("userName");
    var data = JSON.stringify({"goodId":id,"userName":user});
    var xml = new XMLHttpRequest();
    xml.open("POST", "/good/addToTrolley", true);
    xml.setRequestHeader("Content-type", "application/json;charset-UTF-8");
    xml.send(data);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            var res = xml.responseText;
            var json = eval("(" + res + ")");
            let status = json.status;
            let details = json.details;
            if (status === "success") {
                alert("成功加入购物车！")
            } else {
                alert(details);
            }
        }
    }

}

window.onload=function goods_list() {
    var data=JSON.stringify({});
    var xml=new XMLHttpRequest();
    xml.open("POST","/good/getGoodsList",true);
    xml.setRequestHeader("Content-type","application/json;charset-UTF-8");
    xml.send(data);
    xml.onreadystatechange = function(){
        if (xml.readyState === 4 && xml.status === 200) {
            var res = xml.responseText;
            var json = eval("("+res+")");
            let status = json.status;
            let details=json.details;
            let list=json.list;
            if (status === "success") {
                for (i = 0; i < list.length; i++) {
                    var goodHTML = "  <li>\n" +
                        "                <img src="+"\"" + list[i].goodImgLink + "\"" + " class=\"img_li\" "+ "onclick=\"toDetail\("+ list[i].goodId +"\)\">\n" +
                        "                <div class=\"info\">\n" +
                        "                    <h3>"+ list[i].goodName +"</h3>\n" +
                        "                    <p>\n" +
                                                 list[i].goodDescription +
                        "                    </p>\n" +
                        "                    <div class=\"img_btn\">\n" +
                        "                        <!-- 价格，购买logo -->\n" +
                        "                        <div class=\"price\">¥ "+list[i].goodPrice+"</div>\n" +
                        "                        <!-- 购物车按钮 -->\n" +
                        "                        <div class=\"btn\">\n" +
                        "                            <a href=\"#\" class=\"cart\">\n" +
                        "                                <img src=\"img/trolley.jpg\" onclick=\"toTrolley\("+ list[i].goodId +"\)\">\n" +
                        "                            </a>\n" +
                        "                        </div>\n" +
                        "                    </div>\n" +
                        "                </div>\n" +
                        "            </li>"
                    document.getElementById("goods_list").innerHTML +=goodHTML;
                }

            }
            else{
                alert(details);
            }
        }
    }

}
