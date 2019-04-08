(function(){
    document.getElementsByClassName('sidebar')[0].style.marginRight="0"
    document.getElementsByClassName('content')[0].style.width="85%"
    document.getElementById('paginator').style.marginLeft= "-100%"
    document.getElementById('paginator').style.marginRight= "-80%"
    console.log('Hello')
    let ul = document.getElementById('post-list-posts')
    let lis = ul.children
    for(let i =0;i<lis.length; i++){
        let li = lis[i]
        li.children[1].remove()
        li.style.width="370px"
        let img = li.getElementsByTagName('img')[0]
        let frame = li.getElementsByClassName('inner')[0]
        frame.style.width="360px"
        frame.style.height="360px"
        var zoom = 360.0/img.width
        img.width*=zoom
        img.height*=zoom
        // img.width*=2 //150*2
        // img.height*=2 
    }
})()