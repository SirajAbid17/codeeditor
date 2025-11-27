let htmlinp=document.querySelector('.html textarea')
let cssinp=document.querySelector('.css textarea')
let jsinp=document.querySelector('.js textarea')
let save=document.querySelector('#save')
let output=document.querySelector("#outputframe")

save.addEventListener('click',()=>{
    output.contentDocument.body.innerHtml=htmlinp.value
    output.contentDocument.head.innerHtml=`<style>${cssinp.value}</style>`
    output.contentWindow.eval(jsinp.value)
})