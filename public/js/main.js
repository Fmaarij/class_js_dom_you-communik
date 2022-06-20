import {ItemHtml} from './classHtml.js';

let header = new ItemHtml("header", "class", " ", document.body);
let nav = new ItemHtml("nav", "class", "row",header._type);
let divLogo=new ItemHtml("div","class","col",nav._type);
let logo = new ItemHtml("img","src","./public/img/logo-horizontal-fond-noir-couleur.png",divLogo._type);
let ul=new ItemHtml("ul","class","col d-flex",nav._type);

let divli1 = new ItemHtml("div","class","col",ul._type);
let imgLi1 = new ItemHtml("img","src","./public/img/home-icon.png",divli1._type);
let li1 = new ItemHtml("li","class","",divli1._type);

let divli2 = new ItemHtml("div","class","col",ul._type);
let imgLi2 = new ItemHtml("img","src","./public/img/home-icon.png",divli2._type);
let li2 = new ItemHtml("li","class","",divli2._type);

let divli3 = new ItemHtml("div","class","col",ul._type);
let imgLi3 = new ItemHtml("img","src","./public/img/home-icon.png",divli3._type);
let li3 = new ItemHtml("li","class","",divli3._type);

let divli4 = new ItemHtml("div","class","col",ul._type);
let imgLi4 = new ItemHtml("img","src","./public/img/home-icon.png",divli4._type);
let li4 = new ItemHtml("li","class","",divli4._type);

let divli5 = new ItemHtml("div","class","col",ul._type);
let imgLi5 = new ItemHtml("img","src","./public/img/home-icon.png",divli5._type);
let li5 = new ItemHtml("li","class","",divli5._type);

li1.insertHtml("HOME");
li2.insertHtml("PACKAGES");
li3.insertHtml("OUTILS");
li4.insertHtml("PROJETS");
li5.insertHtml("CONTACT");

ul.addClassList("listUl");


function myFunction(x) {
    if (x.matches) { // If media query matches
     nav.addClassList("flex-column");
    } else {
        nav.addClassList("flex-row");
    }
  }
  
  var x = window.matchMedia("(max-width:320px)")
  myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes
