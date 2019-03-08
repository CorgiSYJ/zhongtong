//head nav 鼠标经过显示导航详情 
(function(){
var lis=document.querySelectorAll("#header>div>div.header-middle>ul>li");
for(var li of lis){
    li.onmouseover=function(){
        if(this.firstChild.nextElementSibling){
            this.firstChild.nextElementSibling.style.display="block";
        }
    }
    li.onmouseout=function(){
        var div=this.firstChild.nextElementSibling;
        if(div){
            div.style.display="none";
        }
    }
}
})()