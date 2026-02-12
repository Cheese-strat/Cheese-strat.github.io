/*var securitycode = document.getElementsByClassName("code")[0]
var image = document.getElementsByClassName("base-image")[0]*/
var binbox = document.getElementById("binbox");
var textbox = document.getElementById("locationtext")
/*securitycode.addEventListener('input', function (e) {
    console.log(securitycode.textContent)
    if (securitycode.textContent = "1013") {
        console.log("security authorized")
        image.style.visibility = "visible"
    }
})*/


var obj = [
    {
        binnum: 1,
        top: 15,
        left: 20,
        description: "Garden Event, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 2,
        top: 80,
        left: 10,
        description: "Garden Event, Shelf Bay",
        link: undefined
    },
    {
        binnum: 3,
        top: 38,
        left: 48,
        description: "Garden Event, Shelf Bay",
        link: undefined
    },
    {
        binnum: 4,
        top: 56,
        left: 56,
        description: "Garden Event, Shelf Bay",
        link: undefined
    }, {
        binnum: 5,
        top: 60,
        left: 25,
        description: "Garden Event, Shelf Bay",
        link: undefined
    },
    {
        binnum: 6,
        top: 29,
        left: 84,
        description: "Garden Event, Shelf Bay",
        link: undefined
    },
    {
        binnum: 7,
        top: 28,
        left: 29,
        description: "Stationary Writing, Shelf Bay",
        link: undefined
    },
    {
        binnum: 8,
        top: 56,
        left: 56,
        description: "  , Shelf Bay",
        link: undefined
    }, {
        binnum: 9,
        top: 15,
        left: 20,
        description: "  , Shelf Bay",
        link: undefined
    },
    {
        binnum: 10,
        top: 80,
        left: 10,
        description: "  , Shelf Bay",
        link: undefined
    },
    {
        binnum: 11,
        top: 38,
        left: 48,
        description: ", Shelf Bay",
        link: undefined
    },
    {
        binnum: 12,
        top: 56,
        left: 56,
        description: ", Shelf Bay",
        link: undefined
    }, {
        binnum: 12,
        top: 15,
        left: 20,
        description: ", Shelf Bay",
        link: undefined
    },
    {
        binnum: 13,
        top: 80,
        left: 10,
        description: ", Shelf Bay",
        link: undefined
    },
    {
        binnum: 14,
        top: 38,
        left: 48,
        description: ", Shelf Bay",
        link: undefined
    },
    {
        binnum: 15,
        top: 56,
        left: 56,
        description: ", Shelf Bay",
        link: undefined
    }, {
        binnum: 16,
        top: 15,
        left: 20,
        description: "",
        link: undefined
    },
    {
        binnum: 17,
        top: 80,
        left: 10,
        description: "",
        link: undefined
    },
    {
        binnum: 18,
        top: 38,
        left: 48,
        description: "",
        link: undefined
    },
    {
        binnum: 19,
        top: 56,
        left: 56,
        description: "",
        link: undefined
    }, {
        binnum: 20,
        top: 15,
        left: 20,
        description: "",
        link: undefined
    },
    {
        binnum: 21,
        top: 80,
        left: 10,
        description: "",
        link: undefined
    },
    {
        binnum: 22,
        top: 38,
        left: 48,
        description: "",
        link: undefined
    },
    {
        binnum: 23,
        top: 56,
        left: 56,
        description: "",
        link: undefined
    },
    {
        binnum: 24,
        top: 12,
        left: 56,
        description: "",
        link: undefined
    }

];
binbox.addEventListener('input', function (e) {
    var num = Number(binbox.value)
    console.log(binbox.value)
    textbox.textContent = obj[num-1].description
    /*obj[num-1].link.style.color= rgb(0, 255, 0);*/
})
/*
obj.forEach(function (item, index) {
    var span = document.createElement("span")
    span.className = "dot";
    span.style = "top: " + item.top.toString() + "%; left: " + item.left.toString() + "%;";
    span.textContent = item.binnum;
    obj[index].link = span
    document.getElementsByClassName("image-container")[0].appendChild(span)
})*/