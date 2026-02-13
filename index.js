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
        description: "Garden Event, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 3,
        top: 38,
        left: 48,
        description: "Garden Event, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 4,
        top: 56,
        left: 56,
        description: "Garden Event, Outer Shelf Bay",
        link: undefined
    }, {
        binnum: 5,
        top: 60,
        left: 25,
        description: "Garden Event, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 6,
        top: 29,
        left: 84,
        description: "Garden Event, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 7,
        top: 28,
        left: 29,
        description: "Stationary Writing, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 8,
        top: 56,
        left: 56,
        description: "Stationairy, Outer Shelf Bay",
        link: undefined
    }, {
        binnum: 9,
        top: 15,
        left: 20,
        description: "Stationairy, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 10,
        top: 80,
        left: 10,
        description: "Note Books, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 11,
        top: 38,
        left: 48,
        description: "Stationairy boards, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 12,
        top: 56,
        left: 56,
        description: "Pack and Post, Outer Shelf Bay",
        link: undefined
    }, {
        binnum: 13,
        top: 15,
        left: 20,
        description: "Diaries, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 14,
        top: 80,
        left: 10,
        description: "Adult Craft, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 15,
        top: 38,
        left: 48,
        description: "Adult Craft, Outer Shelf Bay",
        link: undefined
    },
    {
        binnum: 16,
        top: 56,
        left: 56,
        description: "Adult Craft, Outer Shelf Bay",
        link: undefined
    }, {
        binnum: 17,
        top: 15,
        left: 20,
        description: "Diamond art, Outer Shelf Bay",
        link: undefined
    },{
        binnum: 18,
        top: 15,
        left: 20,
        description: "Educational and money tins, Outer Shelf Bay",
        link: undefined
    },
/* Perimeter 18–73 */

{ binnum: 19, top: 0, left: 0, description: "Dog Toys, Outer Shelf Bay", link: undefined },
{ binnum: 20, top: 0, left: 0, description: "Dog Toys, Outer Shelf Bay", link: undefined },
{ binnum: 21, top: 0, left: 0, description: "Dog Toys, Outer Shelf Bay", link: undefined },
{ binnum: 22, top: 0, left: 0, description: "Dog Toys, Outer shelf bay", link: undefined },
{ binnum: 23, top: 0, left: 0, description: "Shmackos, Outer shelf bay", link: undefined },
{ binnum: 24, top: 0, left: 0, description: "Dog Treats, Outer shelf bay", link: undefined },
{ binnum: 25, top: 0, left: 0, description: "Dog Treats, Outer Shelf Bay", link: undefined },
{ binnum: 26, top: 0, left: 0, description: "Dog Treats, Outer Shelf Bay", link: undefined },
{ binnum: 27, top: 0, left: 0, description: "Dog Food, Outer Shelf Bay", link: undefined },
{ binnum: 28, top: 0, left: 0, description: "Dog bowls, Outer Shelf Bay", link: undefined },
{ binnum: 29, top: 0, left: 0, description: "Puppy pads, Outer Shelf Bay", link: undefined },
{ binnum: 30, top: 0, left: 0, description: "Cat toys, Outer Shelf Bay", link: undefined },
{ binnum: 31, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 32, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 33, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 34, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 35, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 36, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 37, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 38, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 39, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 40, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 41, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 42, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 43, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 44, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 45, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 46, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 47, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 48, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 49, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 50, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 51, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 52, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 53, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 54, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 55, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 56, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 57, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 58, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 59, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 60, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 61, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 62, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 63, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 64, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 65, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 66, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 67, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 68, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 69, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 70, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 71, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 72, top: 0, left: 0, description: "Perimeter", link: undefined },
{ binnum: 73, top: 0, left: 0, description: "Perimeter", link: undefined },

/* Registers 74–93 */
{ binnum: 74, top: 0, left: 0, description: "Register", link: undefined },
{ binnum: 75, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 76, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 77, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 78, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 79, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 80, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 81, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 82, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 83, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 84, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 85, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 86, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 87, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 88, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 89, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 90, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 91, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 92, top: 0, left: 0, description: "Registers", link: undefined },
{ binnum: 93, top: 0, left: 0, description: "Registers", link: undefined },

/* Two Tiers 94–101 */
{ binnum: 94, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 95, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 96, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 97, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 98, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 99, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 100, top: 0, left: 0, description: "Two Tiers", link: undefined },
{ binnum: 101, top: 0, left: 0, description: "Two Tiers", link: undefined },

/* Dump Bins 107–112 */
{ binnum: 107, top: 0, left: 0, description: "Dump Bin", link: undefined },
{ binnum: 108, top: 0, left: 0, description: "Dump Bin", link: undefined },
{ binnum: 109, top: 0, left: 0, description: "Dump Bin", link: undefined },
{ binnum: 110, top: 0, left: 0, description: "Dump Bin", link: undefined },
{ binnum: 111, top: 0, left: 0, description: "Dump Bin", link: undefined },
{ binnum: 112, top: 0, left: 0, description: "Dump Bin", link: undefined },

/* Six Ways 114–135 */
{ binnum: 114, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 115, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 116, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 117, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 118, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 119, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 120, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 121, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 122, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 123, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 124, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 125, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 126, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 127, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 128, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 129, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 130, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 131, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 132, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 133, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 134, top: 0, left: 0, description: "Six Way", link: undefined },
{ binnum: 135, top: 0, left: 0, description: "Six Way", link: undefined },

/* Aisles 141–226 */
{ binnum: 141, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 142, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 143, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 144, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 145, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 146, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 147, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 148, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 149, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 150, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 151, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 152, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 153, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 154, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 155, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 156, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 157, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 158, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 159, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 160, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 161, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 162, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 163, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 164, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 165, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 166, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 167, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 168, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 169, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 170, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 171, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 172, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 173, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 174, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 175, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 176, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 177, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 178, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 179, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 180, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 181, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 182, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 183, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 184, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 185, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 186, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 187, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 188, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 189, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 190, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 191, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 192, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 193, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 194, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 195, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 196, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 197, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 198, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 199, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 200, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 201, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 202, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 203, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 204, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 205, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 206, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 207, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 208, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 209, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 210, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 211, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 212, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 213, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 214, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 215, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 216, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 217, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 218, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 219, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 220, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 221, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 222, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 223, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 224, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 225, top: 0, left: 0, description: "Aisle", link: undefined },
{ binnum: 226, top: 0, left: 0, description: "Aisle", link: undefined },

{ binnum: 227, top: 0, left: 0, description: "Seeds Hang Out", link: undefined },
{ binnum: 228, top: 0, left: 0, description: "Seeds Hang Out", link: undefined },
// ...
{ binnum: 353, top: 0, left: 0, description: "Seeds Hang Out", link: undefined },

{ binnum: 354, top: 0, left: 0, description: "Card Stand", link: undefined },
// ...
{ binnum: 380, top: 0, left: 0, description: "Card Stand", link: undefined },

{ binnum: 381, top: 0, left: 0, description: "Card Drawers", link: undefined },
// ...
{ binnum: 390, top: 0, left: 0, description: "Card Drawers", link: undefined },

{ binnum: 391, top: 0, left: 0, description: "Side Stack", link: undefined },
// ...
{ binnum: 402, top: 0, left: 0, description: "Side Stack", link: undefined },

{ binnum: 403, top: 0, left: 0, description: "Overhead", link: undefined },
// ...
{ binnum: 417, top: 0, left: 0, description: "Overhead", link: undefined },

{ binnum: 418, top: 0, left: 0, description: "Clip Strip", link: undefined },
{ binnum: 419, top: 0, left: 0, description: "Misc", link: undefined },
{ binnum: 420, top: 0, left: 0, description: "Directs / Markdown", link: undefined },
{ binnum: 421, top: 0, left: 0, description: "Directs / Markdown", link: undefined },

{ binnum: 422, top: 0, left: 0, description: "Cage", link: undefined },
// ...
{ binnum: 443, top: 0, left: 0, description: "Cage", link: undefined },

{ binnum: 444, top: 0, left: 0, description: "Cards and party, Side Stack", link: undefined },
{ binnum: 445, top: 0, left: 0, description: "Registers, Side Stack", link: undefined },
{ binnum: 446, top: 0, left: 0, description: "Pallet", link: undefined },
{ binnum: 447, top: 0, left: 0, description: "Pallet", link: undefined }

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