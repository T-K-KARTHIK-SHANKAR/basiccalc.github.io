
function f1()
{
var n1=parseInt(document.querySelector("#i1").value);
var n2=parseInt(document.querySelector("#i2").value);
var res;
res=n1+n2;
document.querySelector("#op").innerHTML=res;
}
function f2()
{
var n1=parseInt(document.querySelector("#i1").value);
var n2=parseInt(document.querySelector("#i2").value);
var res;
res=n1-n2;
document.querySelector("#op").innerHTML=res;
}
function f3()
{
var n1=parseInt(document.querySelector("#i1").value);
var n2=parseInt(document.querySelector("#i2").value);
var res;
res=n1*n2;
document.querySelector("#op").innerHTML=res;
}
function f4()
{
var n1=parseInt(document.querySelector("#i1").value);
var n2=parseInt(document.querySelector("#i2").value);
var res;
res=n1/n2;
document.querySelector("#op").innerHTML=res;
}