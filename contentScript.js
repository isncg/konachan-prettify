console.log("konachan-big-preview")
console.log("Star this project: https://github.com/EthanNote/konachan-big-preview")
if(window.location.host==="konachan.net" || window.location.host==="konachan.com"){

    let ad = document.getElementsByTagName('iframe')
    while(ad && ad.length>0){
        ad[0].remove()
    }
    let footer = document.getElementsByClassName('footer')[0]
    while(footer && footer.children.length>1){
        footer.children[1].remove()
    }

    document.getElementsByClassName('sidebar')[0].style.marginRight="0"
    document.getElementsByClassName('content')[0].style.width="85%"
    document.getElementById('paginator').style.marginRight= "20%"
    let ul = document.getElementById('post-list-posts')
    let lis = ul.children
    for(let i =0;i<lis.length; i++){
        let li = lis[i]
        while(li.children && li.children.length>1){
            li.children[1].remove()
        }
        li.style.width="370px"
        let img = li.getElementsByTagName('img')[0]
        let frame = li.getElementsByClassName('inner')[0]
        frame.style.width="360px"
        frame.style.height="360px"
        let zoom = 360.0/img.width
        img.width*=zoom
        img.height*=zoom
    }
}

else if(window.location.host==="yande.re" ){
   

    document.getElementsByClassName('sidebar')[0].style.marginRight="0"
    document.getElementsByClassName('sidebar')[0].style.width="15%"
    document.getElementsByClassName('content')[0].style.width="85%"
    document.getElementById('paginator').style.marginRight= "20%"
    let ul = document.getElementById('post-list-posts')
    let lis = ul.children
    for(let i =0;i<lis.length; i++){
        let li = lis[i]
        while(li.children && li.children.length>1){
            li.children[1].remove()
        }
        li.style.width="370px"
        let img = li.getElementsByTagName('img')[0]
        let frame = li.getElementsByClassName('inner')[0]
        frame.style.width="360px"
        frame.style.height="480px"
        frame.style.backgroundColor = "#252525"
        let zoom = 360.0/img.width
        img.width*=zoom
        img.height*=zoom
    }
}