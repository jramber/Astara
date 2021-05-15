import axios from 'axios'
import router from '@/router';

const Axios = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 1000,
  withCredentials: true,
});

//interceptor
Axios.interceptors.response.use((res)=>{
  //console.log(res);
  return res;
},(/*error*/)=>{ 
  router.push({name:'Login'});
  //return Promise.reject(error);
});

//this function complements the interceptor
function Validate() {
  return Axios.get("/auth/validate").then((res)=>{
    if (/2.{2}/.test(res.status)){
      console.log(true);
      return true;
    }else{
      console.log(false);
      return false;
    }
  });
}

function AreaCorrespond(Area) {
  return Axios.post("/area/correspond",{name:Area}).then((res)=>{
    console.log(res);
    return res.data;
  });
}

export { Validate, AreaCorrespond };
