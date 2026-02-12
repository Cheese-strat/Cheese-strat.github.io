
obj.forEach(function (item, index){
    var span = document.createElement("span")
    span.className = "dot";
    span.style = "top: "+item.top.toString()+"%; left: "+ item.left.toString()+"%;";
    span.textContent = "•";
    obj[index].link = span
document.getElementsByClassName("image-container")[0].appendChild(span)
})
var obj = [
    {
        binnum: 1,
        top:50,
        left: 50,
        description:"",
        link: undefined
    }

];