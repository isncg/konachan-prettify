(function () {
    console.log("konachan-big-preview")
    console.log("Star this project: https://github.com/EthanNote/konachan-big-preview")

    let sidebarStyle = document.getElementsByClassName('sidebar')[0].style
    sidebarStyle.marginRight = "0"
    sidebarStyle.width = "15%"
    sidebarStyle.maxHeight = "100%"
    sidebarStyle.position = "fixed"
    sidebarStyle.overflowY = "auto"
    sidebarStyle.overflowX = "hidden"

    let contentStyle = document.getElementsByClassName('content')[0].style
    contentStyle.width = "85%"
    contentStyle.marginLeft = "15%"
    contentStyle.paddingLeft = "1em"

    let ul = document.getElementById('post-list-posts')
    let lis = ul.children
    for (let i = 0; i < lis.length; i++) {
        let li = lis[i]
        while (li.children && li.children.length > 1) {
            li.children[1].remove()
        }
        li.style.width = "370px"
        let img = li.getElementsByTagName('img')[0]
        let frame = li.getElementsByClassName('inner')[0]
        frame.style.width = "360px"
        frame.style.height = "480px"
        frame.style.backgroundColor = "#252525"
        let zoom = 360.0 / img.width
        img.width *= zoom
        img.height *= zoom
    }
})()