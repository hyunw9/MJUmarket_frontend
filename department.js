function printData(){
            
    const email = document.getElementById("email");
    const password = document.getElementById('password')
    
    axios({
        method: "get",
        url: "http //ec2-3-35-149-126.ap-northeast-2.compute.amazonaws.com:8080/post/",
        responseType: "json"
    }).then(function (response) {
        document.write(response.title)
    })
  }
  