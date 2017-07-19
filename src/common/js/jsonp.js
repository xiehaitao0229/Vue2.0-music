/*
 *   对jsonp的简单封装
 * */

import originJSONP from 'jsonp'
/* url传入地址，data:参数配置，option */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);   //  如果是前面是?的话就？否则就& + 拼接param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        //  请求成功
        resolve(data);
      } else {
        //  请求失败
        reject(err);
      }
    })
  })
}

/*
 *   这个函数的把url和data参数拼接起来
 * */
function param(data) {
  let url = '';
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : '';
}


