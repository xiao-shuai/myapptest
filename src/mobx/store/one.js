// home 
import { observable, action } from "mobx";

class OneStore {
  @observable text;
  @observable qm;
  @observable tx;
  @observable mine_bg;
  @observable login;
  constructor() {
    this.text = "Mr.Han"; 
    this.qm="Every foodie is an autographed introduction";
    this.tx="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553497401814&di=401257d82747bb1b70bd5547a890c38a&imgtype=0&src=http%3A%2F%2Fpic1.16pic.com%2F00%2F26%2F06%2F16pic_2606097_b.jpg";
    this.mine_bg="../../img/mine_bg.jpeg";
    this.login=undefined
   
  }
  save_login=(ok)=>{
    this.login=ok
  }
  change_name=(c)=>{
    this.text=c    
   }
  
  change_qm=(e)=>{
    this.qm=e
  }
  change_tx=(tx)=>{
    this.tx=tx
  }

 
  // get_alldata=()=>{
  //   fetch('http://apis.juhe.cn/cook/category?key=74d4b33458ab0649914dab32390eaab4').then(
  //     action("fetchres",res=>{
  //       return res.json();
  //     })
  //   ).then(
  //     action("getsuc",data=>{
  //       console.log("333",data.result)
  //       return(this.data=data.result)
  //     })
  //   ).catch("geterr",err=>{
  //     return (console.log(err.error_code))
  //   })
    
  // };

  
}

const oneStore = new OneStore(); 

export { oneStore };