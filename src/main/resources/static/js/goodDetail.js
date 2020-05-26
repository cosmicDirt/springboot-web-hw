function adder() {
    var count = document.getElementById("countnum").innerHTML;
    count = parseInt(count) + 1;
    document.getElementById("countnum").innerHTML = count;
    document.getElementById("total_price").innerHTML = (parseFloat(document.getElementById("one_price").innerHTML) * count).toFixed(2).toString();
}

function minuser() {
    var count = document.getElementById("countnum").innerHTML;
    if (count <= 0) {
        count = 0;
    } else {
        count = parseInt(count) - 1;
    }
    document.getElementById("countnum").innerHTML = count;
    document.getElementById("total_price").innerHTML = (parseFloat(document.getElementById("one_price").innerHTML) * count).toFixed(2).toString();
}

var good;
window.onload=function getDetail() {
    var id=window.location.href.split("=")[1];
    var data = JSON.stringify({"goodId":id});
    var xml = new XMLHttpRequest();
    xml.open("POST", "/good/getGoodDetail", true);
    xml.setRequestHeader("Content-type", "application/json;charset-UTF-8");
    xml.send(data);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            var res = xml.responseText;
            var json = eval("(" + res + ")");
            let status = json.status;
            let details = json.details;
            if (status === "success") {
                good = json.good;
                document.getElementById("good_name").innerHTML = good.goodName;
                document.getElementById("good_description").innerHTML = good.goodDescription;
                document.getElementById("one_price").innerHTML = good.goodPrice;
                document.getElementById("stock").innerHTML ="（ 库存："+good.goodStock+" ）";
                document.getElementById("good_imglink").src =  good.goodImgLink;
                document.getElementById("total_price").innerHTML=good.goodPrice;
            } else {
                alert(details);
            }
        }
    }
}

function toTrolley(){
    var id=window.location.href.split("=")[1];
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
            } else {
                alert(details);
            }
        }
    }
    alert("成功加入购物车！")
}

function buy(){
    var id=window.location.href.split("=")[1];
    var user=localStorage.getItem("userName");
    var count = document.getElementById("countnum").innerHTML;
    var address=prompt("请输入收货地址！");
    var data = JSON.stringify({"goodId":id,"userName":user, "orderAmount":count,"orderMoney":good.goodPrice*count,
        "orderAddress":address,"goodName":good.goodName});
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
            if (status === "success") {
            } else {
                alert(details);
            }
        }
    }
    alert("成功生成订单，请前往订单页面查看！")
}
