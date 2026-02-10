var obj = [
    {
        binnum: 1,
        top:50,
        left: 50,
        description:"",
        link: undefined
    }

];
obj.forEach(function (item, index){
    var span = document.createElement("span")
    span.className = "dot";
    span.style = "top: "+item.top.toString()+"px; left: "+ item.left.toString()+"px;";
    span.textContent = "•";
    obj[index].link = span
document.getElementsByClassName("image-container")[0].appendChild(span)
})