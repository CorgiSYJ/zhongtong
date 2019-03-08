/*-------轮播图片--------*/
(function(){
    var imgs=document.querySelectorAll("#index-content>div.index-banner>div.banner-box>a>img");
    //轮播，设置除当前图片的下一个或者第一个图片的class和自定义属性
    function changeHide(img,span){
        img.className="index-banner-img";
        img.setAttribute("data-toggle","hide");
        span.className="dot cur";
    }
    //设置每5秒钟切换图片
    function change(){
        for(var i=0;i<imgs.length;i++){
            var img=imgs[i];span=spans[i];
            if(img.hasAttribute("data-toggle","hide")){
                img.className="index-banner-img hide";
                img.removeAttribute("data-toggle","hide");
                span.className="dot";
                if(i<imgs.length-1){
                    changeHide(imgs[i+1],spans[i+1]);
                }else{
                    changeHide(imgs[0],spans[0]);
                }
            break;
            }
        }
    }
    var ban=setInterval(change,5000);
    //当鼠标进入轮播范围内清除图片切换定时器
    var div=document.querySelector("#index-content>div.index-banner>div.banner-box");
    div.onmouseover=function(){
        clearInterval(ban);
    }
    div.onmouseout=function(){
        ban=setInterval(change,5000);
    }
    //轮播点
    var spans=document.querySelectorAll("#index-content>div.index-banner>div.banner-box>div.banner-dot>div.dot-all>span");
    for(var span of spans){
        span.onclick=function(){
            change();
        }
    }
    
/*单号查询区域*/
//??????????????????????????????????????????????????????????????????
//除自己外点击缩回
/*var searchOut=document.querySelectorAll("#index-content>div.index-banner>div.banner-bottom>div.bottom-all>div.bottom-left");
console.log(searchOut);
searchOut.onmouseoutup=function(){
    this.className="bottom-left";
}*/
var p=document.querySelectorAll("#index-content>div.index-banner>div.banner-bottom>div.bottom-all>div.bottom-left>div.bottom-left-title>p");
var text=p[0].parentNode.nextElementSibling.children;
//textarea获取焦点
text[0].onfocus=function(){
    this.parentNode.parentNode.className="bottom-left cgbottom";
}
//点击运单号查询
p[0].onmouseup=function(){
    this.parentNode.parentNode.className="bottom-left cgbottom";
    this.lastElementChild.style.color="#33A2F7";
    this.nextElementSibling.lastElementChild.style.color="#fff";
    text[0].className="search";
    text[1].className="search hide"
}
//点击手机号查询
p[1].onmouseup=function(){
    this.parentNode.parentNode.className="bottom-left cgbottom";
    this.lastElementChild.style.color="#33A2F7";
    this.previousElementSibling.lastElementChild.style.color="#fff";
    text[0].className="search hide";
    text[1].className="search"
}

//物流业务内的轮播和选择
var bsspans=document.querySelectorAll("[data-toggle=item-menu]");
var bsboxs=bsspans[0].parentNode.nextElementSibling.children;
function bschange(x,y,i,j){
   x[i].className="item";
   x[i+j].className="item checked";
   y[i].className="item-box";
   y[i+j].className="item-box show"
}
//定时轮播
function bsset(){
    for(var i=0;i<bsspans.length;i++){
        if(bsspans[i].className=="item checked"){
            if(i<bsspans.length-1){
                bschange(bsspans,bsboxs,i,1);
            }else{
                bschange(bsspans,bsboxs,i,-1);
            }
            break;
        }
    }
}
var bgset=setInterval(bsset,6000);
//business-item选择

//遍历清空默认选项的class的封装函数
function clearC(bs,cl){
    for(var b of bs){
        b.className=cl;
    }
}
//寻找business-item点击元素
var bsitems=document.querySelectorAll("[data-toggle=business-title]");
var bsitemc=bsitems[0].parentNode.nextElementSibling.children;
for(var bs of bsitems){
    bs.onclick=function(){
        clearC(bsitems,"title"); 
        clearC(bsitemc,"business-item");
        this.className="title actived";
        var id=this.getAttribute("data-target");
        var div=document.body.querySelector(id);
        div.className="business-item show";
        
    }
}
//寻找物流业务内的点击元素
for(var sp of bsspans){
    sp.onmouseup=function(){
        clearC(bsboxs,"item-box");
        clearC(bsspans,"item");
        var id=this.getAttribute("data-target");
        var div=document.body.querySelector(id);
        div.className="item-box show";
        this.className="item checked";
    }
}

//我们的优势移动轮播 设置class属性为carousel-inner的margin-left
var advlis=document.querySelectorAll("[data-target='#index-carousel']");
var inner=document.querySelector("#index-carousel>div>div");
for(var li of advlis){
    li.onmouseup=function(){
        clearC(advlis,"");
        var lin=this.getAttribute("data-slide-to");
        this.className="active";
        if(lin==0){
            inner.style.marginLeft="0";
        }
        if(lin==1){
            inner.style.marginLeft="-1200px";
        }
        if(lin==2){
            inner.style.marginLeft="-2400px";
        }
    }
}

//新闻动态内的动作切换
var newsspans=document.querySelectorAll("#index-content>div.index-news>div.index-news-content>div.news-right>div.news-title>span");
var newscts=document.querySelectorAll("#index-content>div.index-news>div.index-news-content>div.news-right>div.news-right-content");
for(var span of newsspans){
    span.onmouseup=function(){
        clearC(newsspans,"");
        clearC(newscts,"news-right-content hide");
        this.className="active";
        var s=this.getAttribute("data-slide-to");
        newscts[s].className="news-right-content";
    }
}
})()
