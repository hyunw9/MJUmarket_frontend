function submitPost(){
    const title = document.getElementById("post-title").value
    const pic = document.getElementById("post-pic").value
    const price = document.getElementById("price").value
    const content = document.getElementById("post-body").value
    window.localStorage.setItem('postTitle', title)
    window.localStorage.setItem('price', price)
    window.localStorage.setItem('content', content)
}