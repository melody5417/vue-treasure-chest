/**
 * @Description: 请求校验参数获取方法
 */
import md5 from "md5";
import { v4 as uuidv4 } from "uuid";
import { serverABaseURL, serverBBaseURL } from "./config";

// 前后端约定应用标识字符串
const skey = "XXX";

// 前后端同步的时间戳差值
let syncDeltaTime; 

/**
 * 设置服务器和本地的时间差 
 * deltaTime = serverTime - localTime
 * 
 * @param {number} time  服务器和本地的时间差 
 */
export function setSyncDeltaTime(time) {
  if (typeof time === 'number') {
    syncDeltaTime = time;
  }
}

/**
 * 获得请求时间参数， 优先使用服务器时间
 * 
 */
export function getTime() {
  if (syncDeltaTime) {
    return String(Date.now() + syncDeltaTime);
  }
  return String(Date.now());
}

/**
 * 组装请求数据，计算并装配校验参数
 *
 * @param {object} data 原始请求数据
 * @returns {object} 装配了校验参数/值的请求数据
 */
export function getVerificationParams(data) {
  data = typeof data === "object" ? data : {};
  Object.keys(data).forEach(key => {
    // 删除无效数据
    if (data[key] === undefined || data[key] === null) {
      delete data[key];
    }
  });
  const sortedParams = JSON.stringify(data) + skey;
  return md5(sortedParams);
}

/**
 * 获取请求域名, 返回指定type类型的完整域名地址
 *
 * @param {String} type 域名类型, 默认为 A 类型
 * @returns {String} 返回 type 对应的 baseURL
 */
export function getBaseURL(type = "A") {
  let baseURL = serverABaseURL();
  if (type === "B") {
    baseURL = serverBBaseURL();
  }
  return baseURL;
}

/**
 * 生成请求id
 *
 * @returns 随机字符串
 */
export function getRequestId() {
  return uuidv4();
}

/**
 * 获取appId
 *
 * @returns {string} appId
 */
export function getAppId() {
  return "cookie.appId"; // cookie 操作延迟多, 改为vuex也可
}

/**
 * 获取user_token
 *
 * @returns {string} userToken
 */
export function getUserToken() {
  return "cookie.token"; // cookie 操作延迟多, 改为vuex也可
}
