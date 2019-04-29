(function () {
    console.log("Konachan Prettify")
    console.log("Star this project: https://github.com/isncg/konachan-prettify")

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

    let tagsBar = document.getElementById('tag-sidebar').parentElement
    let element = document.createElement('h5')
    element.innerText = "Recent tags"
    tagsBar.appendChild(element)

    let recentTagsList = document.createElement('ul')
    let recentTags = window.localStorage['recent_tags'].split(' ')

    let tagTypes = ['general', 'artist', 'style', 'copyright', 'character', 'circle', 'faults']
    for (let i = 0; i < recentTags.length; i++) {
        tag = recentTags[i]
        if (tag.length <= 0) {
            continue
        }
        let v = tag.split('`')
        let tagTypeID = Number(v[0])
        let tagStr = v[1]
        let li = document.createElement('li')
        let lia = document.createElement('a')
        lia.href = '/post?tags=' + tagStr
        lia.innerText = tagStr
        li.appendChild(lia)
        li.className = 'tag-link tag-type-' + tagTypes[tagTypeID]
        recentTagsList.appendChild(li)
    }
    tagsBar.appendChild(recentTagsList)

})()
