function submitPost(){
    const title = document.getElementById("post-title").value
    const price = document.getElementById("price").value
    const content = document.getElementById("post-body").value
    const now_state = document.getElementById("sold-state").value

    window.localStorage.setItem('postTitle', title)
    window.localStorage.setItem('price', price)
    window.localStorage.setItem('content', content)
    window.localStorage.setItem('state', now_state)
}