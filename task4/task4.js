let canvas = document.querySelector("canvas");
canvas.height= window.innerHeight;
canvas.width = window.innerWidth;
let ctx = canvas.getContext("2d");
fetch('./plotMe.xml').then(res=>{
    return res.text();
}).then(xml=>{
    return new DOMParser().parseFromString(xml,"text/xml");

}).then(object =>{
    let els = object.children[0].children
    for(let i=0;i<els.length;i++){
        let props = {};
        for(let j=0;j<els[i].children.length;j++){
            props[els[i].children[j].tagName]=els[i].children[j].textContent
        }
        if(els[i].tagName =="Line"){
            ctx.beginPath();
            ctx.moveTo(props.XStart,props.YStart)
            ctx.lineTo(props.XEnd,props.YEnd)
            ctx.strokeStyle=props.Color;
            ctx.stroke();
            ctx.closePath();
        }
        if(els[i].tagName =="Arc"){
            ctx.beginPath();
            ctx.arc(props.XCenter,props.YCenter,props.Radius,props.ArcStart *(Math.PI/180),(props.ArcStart+props.ArcExtend)*(Math.PI/180))
            ctx.strokeStyle=props.Color;
            ctx.stroke();
            ctx.closePath();
        }
    }
})