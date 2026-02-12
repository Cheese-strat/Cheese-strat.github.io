var securitycode = document.getElementsByClassName("code")[0]
var image = document.getElementsByClassName("base-image")[0]
console.log(code.textContent)
if (code.textContent="1013"){
    console.log("security authorized")
    image.style.visibility = "visible"
}


var obj = [
    {
        binnum: 1,
        top:20,
        left: 25,
        description:"",
        link: undefined
    },
    {
        binnum: 2,
        top:80,
        left: 10,
        description:"",
        link: undefined
    },
    {
        binnum: 3,
        top:38,
        left: 48,
        description:"",
        link: undefined
    },
    {
        binnum: 4,
        top:56,
        left: 56,
        description:"",
        link: undefined
    },
    {
        binnum: 5,
        top:12,
        left: 56,
        description:"",
        link: undefined
    }

];
obj.forEach(function (item, index){
    var span = document.createElement("span")
    span.className = "dot";
    span.style = "top: "+item.top.toString()+"%; left: "+ item.left.toString()+"%;";
    span.textContent = "•";
    obj[index].link = span
document.getElementsByClassName("image-container")[0].appendChild(span)
})