import axios from "axios";
import * as verifyUtil from './verification';

/**
 * 后台服务全局字段规定：
 * header：
 *  _checksum ：使用body的参数，排序，计算MD5
 * body：
 *  _t    : 必填，系统请求时间，通过getTime接口获取系统时间
 *  _token: 必填，用户鉴权的标识，需要第三方
 *  _requestId: 必填，请求ID，随机字符串，保证每次唯一，排查问题的依据
 */

// let baseURL = () => {
//   let url = "XXXX.com";
//   // if (dev === 'prod') {
//   //     url = "sina.com";
//   // }
//   return url;
// };

// 创建一个axios实例
const service = axios.create({
  baseURL: "https://XXXX.com",
  withCredentials: true, // 跨域请求时发送cookie
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理
    console.log(config);
    const { data = {}, headers = {} } = config;
    // 1.装配 appId
    data.appId = verifyUtil.getAppId();
    // 2.装配请求 Id
    data._requestId = verifyUtil.getRequestId();
    // 3.装配请求 token
    data._token = verifyUtil.getUserToken();
    // 4.装配时间参数 _t
    data._t = verifyUtil.getTime();
    // 5.装配验证参数 _checksum
    headers._checksum = verifyUtil.getVerificationParams(config.data);
    Object.assign(config, {headers}, {data})
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    const { errCode, errMsg } = res;

    // 如果自定义代码不是0，则判断为错误。
    if (errCode !== 0) {
      return Promise.reject(new Error(`errCode: ${errCode}, errMsg: ${errMsg || 'Internal error'}`));
    }
    return res;
  },
  (error) => {
    console.log(`err ${error}`);
    return Promise.reject(error);
  }
);

export default service;
