function submitData(){
            
  const email = document.getElementById("email");
  const password = document.getElementById('password')
  
  axios({
      method:"POST",
      url: 'ec2-3-35-149-126.ap-northeast-2.compute.amazonaws.com:8080/auth/login',
      data:{
          "email": email.value,
          "password": password.value
      }
  }).then((res)=>{
      console.log(res);
  }).catch(error=>{
      console.log(error);
      throw new Error(error);
  });
}




/*async function postData(inputEmail, inputPw) {
  try {
    //응답 성공
    const response = await axios.post(
      "ec2-3-35-149-126.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
      {
        //보내고자 하는 데이터
        email: inputEmail,
        password: inputPw,
      }
    );
    console.log(response);
  } catch (error) {
    //응답 실패
    console.error(error);
  }
}
async function submitData() {
  var email = $("#email").val();
  var password = $("#password").val();
  console.log("함수 받았다 ㅇㅇ");
  //응답 성공
  const response = await axios
    .post(
      "http://ec2-3-35-149-126.ap-northeast-2.compute.amazonaws.com:8080/auth/login",
      { email, password } //보내고자 하는 데이터
    )
    .then(function (response) {
      console.log(response.data);
    });
}
export default {
  submitData,
};
*/