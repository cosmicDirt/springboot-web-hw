var num_jia = document.getElementById("plus")
var num_jian = document.getElementById("minus");
var input_num = document.getElementById("input-num");

console.log("numjia",num_jia)
num_jia.onclick = function() {

    input_num.value = parseInt(input_num.value) + 1;
}

num_jian.onclick = function() {

    if(input_num.value <= 0) {
        input_num.value = 0;
    } else {

        input_num.value = parseInt(input_num.value) - 1;
    }

}
