
// var tagString = "<div>I am a div node</div>";
// var range = document.createRange();

// // Make the parent of the first div in the document become the context node
// range.selectNode(document.getElementsByTagName("body").item(0));
// var documentFragment = range.createContextualFragment(tagString);
// document.body.appendChild(documentFragment);

let pic1Src = `https://picsum.photos/400`;
let pic2Src = `https://picsum.photos/400`;
let picWidth = "300";
let myHTML =`
<h1>Hello World!</h1>
<p>This is my pure JS website</p>
<p>Here are some pics:</p>
<img src="${pic1Src}">
<img src="${pic2Src}">
<div>I am a div with a <span>span</span> inside</div>

`;

const myFragment = document.createRange().createContextualFragment(myHTML);
document.body.append(myFragment);

document.body.style.background = "lightblue";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.querySelector('span').style.color = "purple";
document.querySelector('img').style.borderRadius = "50%";
document.querySelector('div').style.margin = "20px";