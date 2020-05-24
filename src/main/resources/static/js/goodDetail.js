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
                let good = json.good;
                document.getElementById("good_name").innerHTML = good.goodName;
                document.getElementById("good_description").innerHTML = good.goodDescription;
                document.getElementById("one_price").innerHTML = good.goodPrice;
                document.getElementById("stock").innerHTML ="（ 库存："+good.goodStock+" ）";
                document.getElementById("good_imglink").src =  good.goodImgLink;
            } else {
                alert(details);
            }
        }
    }
}
