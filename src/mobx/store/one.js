// home 
import { observable, action } from "mobx";

class OneStore {
  @observable text;
  constructor() {
    this.text = "Hello, this is homePage1111";
    this.data=[]
  }

  @action  // 方法推荐用箭头函数的形式
   OneAc = () => {
    this.text = '现在改变啦啦啦！！';
  };
  @action
  get_alldata=()=>{
    fetch('http://apis.juhe.cn/cook/category?key=74d4b33458ab0649914dab32390eaab4').then(
      action("fetchres",res=>{
        return res.json();
      })
    ).then(
      action("getsuc",data=>{
        console.log("333",data.result)
        return(this.data=data.result)
      })
    ).catch("geterr",err=>{
      return (console.log(err.error_code))
    })
    
  };

  
}

const oneStore = new OneStore(); 

export { oneStore };