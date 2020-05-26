var goodlist=[];
var init_sum=0;
window.onload=function getTrolley() {
    var user=localStorage.getItem("userName");
    var data = JSON.stringify({"userName":user});
    var xml = new XMLHttpRequest();
    xml.open("POST", "/good/getTrolley", true);
    xml.setRequestHeader("Content-type", "application/json;charset-UTF-8");
    xml.send(data);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            var res = xml.responseText;
            var json = eval("(" + res + ")");
            let status = json.status;
            let details = json.details;
            if (status === "success") {
                let list = json.list;
                goodlist=list;
                for (i = 0; i < list.length; i++) {
                    init_sum+=list[i].goodPrice;
                    goodlist[i]["goodAmount"]=1;
                    var goodHTML="<div class=\"info warp\" id=\"info"+i+"\">\n" +
                        "    <ul>\n" +
                        "        <li class=\"info_2\"> <img src="+list[i].goodImgLink+" width=\"80px\"/> </li>\n" +
                        "        <li class=\"info_3\"><a>"+list[i].goodName+"</a></li>\n" +
                        "        <li class=\"info_5\"> ￥"+list[i].goodPrice+".0</li>\n" +
                        "        <li class=\"info_6\">\n" +
                        "            <button onclick=\"minus\("+i+","+list[i].goodPrice+"\)\">-</button>\n" +
                        "            <span id=\"count"+i+"\">1</span>\n" +
                        "            <button onclick=\"plus\("+i+","+list[i].goodPrice+"\)\" class=\"bot\">+</button>\n" +
                        "\n" +
                        "        </li>\n" +
                        "        <li class=\"info_7\" id=\"total_price"+i+"\"> ￥"+list[i].goodPrice+".0</li>\n" +
                        "        <li>\n" +
                        "            <a onclick=\"delGood\("+i+","+list[i].goodId+"\)\">删除</a><br />\n" +
                        "        </li>\n" +
                        "    </ul>\n" +
                        "</div>\n"
                    document.getElementById("trolley").innerHTML +=goodHTML;
                    document.getElementById("sum_price").innerHTML=init_sum;
                }
            } else {
                alert(details);
            }
        }
    }
}

function plus(i,price) {
    goodlist[i].goodAmount++;
    var id="count"+i;
    var val=parseInt(document.getElementById(id).innerHTML)+1;
    document.getElementById(id).innerHTML=val;
    var total=val*price;
    document.getElementById("total_price"+i).innerHTML="￥"+total+".0";
    var sum=document.getElementById("sum_price").innerHTML;
    document.getElementById("sum_price").innerHTML=parseInt(sum)+price;
}
function minus(i,price) {

    var id="count"+i;
    var val=parseInt(document.getElementById(id).innerHTML)-1;
    if(val<=1)
    {
        val=1;
    }
    goodlist[i].goodAmount--;
    if(goodlist[i].goodAmount<=1)
    {
        goodlist[i].goodAmount=1;
    }
    document.getElementById(id).innerHTML=val;
    var total=val*price;
    document.getElementById("total_price"+i).innerHTML="￥"+total+".0";
    var sum=document.getElementById("sum_price").innerHTML;
    if(parseInt(sum)-price>=init_sum) {
        document.getElementById("sum_price").innerHTML = parseInt(sum) - price;
    }
}
function delGood(i,id) {
    goodlist.pop(i);
    var sum = document.getElementById("sum_price").innerHTML;
    var tol = document.getElementById("total_price" + i).innerHTML.split("￥")[1];
    tol = tol.split(".")[0];
    var result = parseInt(sum) - parseInt(tol);
    document.getElementById("sum_price").innerHTML = result;
    var good = document.getElementById("info" + i);
    good.parentNode.removeChild(good);

    var user = localStorage.getItem("userName");
    var data = JSON.stringify({"userName": user,"goodId":id});
    var xml = new XMLHttpRequest();
    xml.open("POST", "/good/delFromTrolley", true);
    xml.setRequestHeader("Content-type", "application/json;charset-UTF-8");
    xml.send(data);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            var res = xml.responseText;
            var json = eval("(" + res + ")");
            let status = json.status;
            let details = json.details;
            if (status !== "success") {
                alert(details);
            }
        }
    }
    init_sum=init_sum-tol;
    location.reload();
}

function banlance() {
    var user = localStorage.getItem("userName");
    var address=prompt("请输入收货地址！");
    for(i=0;i<goodlist.length;i++) {
        var data = JSON.stringify({"userName": user, "goodId": goodlist[i].goodId,
            "orderAmount":goodlist[i].goodAmount,"orderMoney":goodlist[i].goodPrice*goodlist[i].goodAmount,
            "orderAddress":address,"goodName":goodlist[i].goodName});
        var xml = new XMLHttpRequest();
        xml.open("POST", "/order/createOrder", true);
        xml.setRequestHeader("Content-type", "application/json;charset-UTF-8");
        xml.send(data);
        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200) {
                var res = xml.responseText;
                var json = eval("(" + res + ")");
                let status = json.status;
                let details = json.details;
            }
        }
    }
    alert("成功生成订单，请前往订单页面查看！")
}
