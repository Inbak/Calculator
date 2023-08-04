var a = 0;
str ="";
function add(){
    var b = parseInt(document.getElementById("x").value);
    a=a+b;
    if(str=="")
        str=str+b;
    else
        str=str+" + "+b;
}
function diff()
{
    var b = parseInt(document.getElementById("x").value);
    a=a-b;
    if(str=="")
        str=str+b;
    else
        str=str+" + "+b;
}
function mul()
{
    var b = parseInt(document.getElementById("x").value);
    if(a==0)
        a=1*b;
    else
        a=a*b;
    if(str=="")
        str=str+b;
    else
        str=str+" * "+b;
}
function div()
{
    var b = parseInt(document.getElementById("x").value);
    if(a==0)
        a=b/1;
    else
        a=a/b;
    if(str=="")
        str=str+b;
    else
        str=str+" / "+b;
}

function equal(){
    document.getElementById("ans").innerText = str +" = "+a;
    a=0;
    str="";
}