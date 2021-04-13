// 请求添加延时，模拟网络延时
export function delay(fn) {
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      fn(resolve, reject)
    }, 500)
  })
}