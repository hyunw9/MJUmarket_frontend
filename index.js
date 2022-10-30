async function postData(inputEmail, inputPw) {
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
