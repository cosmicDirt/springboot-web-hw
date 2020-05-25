window.onload=function () {
    var user = localStorage.getItem("userName");
    var data = JSON.stringify({"userName": user});
    var xml = new XMLHttpRequest();
    xml.open("POST", "/order/getOrderList", true);
    xml.setRequestHeader("Content-type", "application/json;charset-UTF-8");
    xml.send(data);
    xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
            var res = xml.responseText;
            var json = eval("(" + res + ")");
            let status = json.status;
            let details = json.details;
            let list = json.list;
            if (status !== "success") {
                alert("加载失败！");
            }else
            {
                for(i=0;i<list.length;i++) {
                    var orderHTML = "  <tr class=\"trclass\">\n" +
                        "        <td class=\"tdone\">" + list[i].orderId + "</td>\n" +
                        "        <td class=\"tdtwo\">"+ list[i].orderGoodName+"</td>\n" +
                        "        <td class=\"tdthree\">"+list[i].orderAmount +"</td>\n" +
                        "        <td class=\"tdfour\">"+ list[i].orderMoney +"</td>\n" +
                        "        <td class=\"tdfive\">"+list[i].createTime+"</td>\n" +
                        "        <td class=\"tdsix\">"+ list[i].orderAddress+"</td>\n" +
                        "    </tr>"
                    document.getElementById("orders").innerHTML+=orderHTML;
                }
            }
        }
    }
}
