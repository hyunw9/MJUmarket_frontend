import axios from 'axios';

axios.get('ec2-3-35-149-126.ap-northeast-2.compute.amazonaws.com/login').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
})