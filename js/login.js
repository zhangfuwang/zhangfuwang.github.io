var xmlHttp;                                        //这个不解释
var checkpsw;                                  //全局变量，用来密码相同检测
function CreateXmlHttp(){
    if (window.ActiveXObject) {
        xmlHttp= new ActiveXObject('Microsoft.XMLHTTP');
    }
    else if(window.XMLHttpRequest){
        xmlHttp= new XMLHttpRequest();
    }
}

//检测用户名是否合法
function check_usr(obj){
    var objvalue = obj.value;
    var b=/^[a-zA-Z\d]\w{2,10}[a-zA-Z\d]$/;
    if (!b.test(objvalue)) {
        document.getElementByIdx_x('checkusr').innerHTML ="<font color='#ff0000'>用户名非法!</font>";
        return false;
    }
    else {
        CreateXmlHttp();
        xmlHttp.open("GET", "../account/check.php?id=" + objvalue, true);
        xmlHttp.onreadystatechange = checkback;
        xmlHttp.send(null);
    }
}

function checkback(){
    var backvalue = null;
    if(xmlHttp.readyState==1)
    {document.getElementByIdx_x('checkusr').innerHTML ="<font color='#ff0000'>检测中...</font>";}
    if (xmlHttp.responseText == 1) {                                                                   //check.php 没注册返回1，注册返回2
        backvalue = "<font color='#00c72e'>可以使用！</font>";
    }else {
        backvalue="<font color='#ff0000'>抱歉，已经被注册啦！</font>";
    }
    if (xmlHttp.readyState == 4) {
        document.getElementByIdx_x('checkusr').innerHTML = backvalue;
    }
}


//判断密码输入是否合法，一个是长度，一个是没有特殊字符
function check_psw(obj){
    checkpsw=obj.value;
    if(checkpsw.length > 5 && checkpsw.length<21){
        document.getElementByIdx_x("checkpsw").innerHTML = "<font color='#00c72e'>密码可以使用!</font>";
    }else {
        document.getElementByIdx_x("checkpsw").innerHTML="<font color='#ff0000'>密码不符合长度要求!</font>";
    }
    var b=/^[a-zA-Z\d]\w{2,10}[a-zA-Z\d]$/;
    if (!b.test(checkpsw)) {
        document.getElementByIdx_x('checkusr').innerHTML ="<font color='#ff0000'>密码有非法字符!</font>";
        return false;
    }else {
        document.getElementByIdx_x("checkusr").innerHTML="<font color='#ff0000'>密码设置符合要求</font>";
    }

}

//判断两次密码输入是否一致
function check_repsw(obj1,obj2){
    var objvalue1=obj1.value;
    var objvalue2=obj2.value;

    if(objvalue1==objvalue2){
        document.getElementByIdx_x("checkrepsw").innerHTML="<font color='#00c72e'>两次输入密码一致！</font>";
    }else {
        document.getElementByIdx_x("checkrepsw").innerHTML="<font color='#ff0000'>两次输入的密码不一样!</font>";
    }
}


//判断手机号码格式是否合法
function check_tel(obj){
    var objvalue=obj.value;
    var regx=/^(?:13\d|15\d|18[123456789])-?\d{5}(\d{3}|\*{3})$/;
    if(regx.test(objvalue)){
        document.getElementByIdx_x("checktel").innerHTML="<font color='#00c72e'>手机号码输入正确！</font>";
    }else{
        document.getElementByIdx_x("checktel").innerHTML="<font color='#ff0000'>请输入正确的手机号!</font>";
    }
}


//判断邮箱地址格式是否合法
function check_mail(obj){
    var strm=obj.value;
    var regm = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;//验证Mail的正则表达式,^[a-zA-Z0-9_-]:开头必须为字母,下划线,数字,
    if (!strm.match(regm))
    {
        document.getElementByIdx_x("checkmail").innerHTML="<font color='#ff0000'>邮箱地址格式错误或含有非法字符!</font>";
    } else{
        document.getElementByIdx_x("checkmail").innerHTML="<font color='#00c72e'>邮箱地址输入正确！</font>";
    }
}


//点击按钮启动检测
function check(){
    telphone = document.getElementByIdx_x("telphone");
    mail = document.getElementByIdx_x("mail");
    mima1 = document.getElementByIdx_x("mima1");
    mima2 = document.getElementByIdx_x("mima2");
    secury_mima = document.getElementByIdx_x("secury_mima");

    check_tel(telphone);//检测电话
    check_mail(mail);//检测邮箱
    check_repsw(mima1,mima2);//检测两次密码是否一致
    check_psw(secury_mima);//检测密码是否合法
}

