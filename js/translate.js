$(document).ready(function(){
    $("#btn").on("click",trans);
});

function trans() {
    var appid = '20180307000132354';
    var key = 'F8JG1o8hamrCXreDWpWa';
    var salt = (new Date).getTime();
    var query = $("#source").val();
    var from = 'auto';
    var to = 'zh';
    var src = $("#source").val();
    var str1 = appid + query + salt +key;
    var sign = MD5(str1);
    $.ajax({
        url: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
        type: 'get',
        dataType: 'jsonp',
        data: {
            q: query,
            appid: appid,
            salt: salt,
            from: from,
            to: to,
            sign: sign,
            src: src
        },
        success: function (data) {
            document.getElementById("result").innerHTML = data.trans_result["0"].dst;
        }
    });

}