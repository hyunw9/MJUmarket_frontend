const sendBtn = document.querySelector("#btn-email-send")
const randomId_ = String(Math.floor(Math.random()*(9-0)+1))+String(Math.floor(Math.random()*(9-0)+1))+String(Math.floor(Math.random()*(9-0)+1))+String(Math.floor(Math.random()*(9-0)+1))+String(Math.floor(Math.random()*(9-0)+1))+String(Math.floor(Math.random()*(9-0)+1));
const checkBtn = document.querySelector("#btn-email-check")

document.getElementById("btn-email-send").onclick = function() {
    alert(String(document.getElementById("useremail").value).indexOf("mju.ac.kr", 0))
}

function sendSuccess(){
    alert("성공적으로 보내졌어요!")
}

function sendFail(error){
    alert(`${error.text} 이러한 이유로 실패했어요`)
}

checkBtn.addEventListener("click", checkMessage)

function checkMessage(){
    const checkNumber = document.querySelector("#useremail-ckeck");
    const message = document.querySelector("#message")
    if(randomId_ == checkNumber.value){
    message.innerHTML = "인증 번호가 일치합니다."
    }
    else{
        message.innerHTML = "인증 번호가 틀렸습니다."
    }
}