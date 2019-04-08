(function(){
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
    document.getElementById('paginator').style.marginLeft= "-100%"
    document.getElementById('paginator').style.marginRight= "-80%"
    let ul = document.getElementById('post-list-posts')
    let lis = ul.children
    for(let i in lis){
        let li = lis[i]
        li.children[1].remove()
        li.style.width="370px"
        let img = li.getElementsByTagName('img')[0]
        let frame = li.getElementsByClassName('inner')[0]
        frame.style.width="360px"
        frame.style.height="360px"
        let zoom = 360.0/img.width
        img.width*=zoom
        img.height*=zoom
        // img.width*=2 //150*2
        // img.height*=2 
    }
})()