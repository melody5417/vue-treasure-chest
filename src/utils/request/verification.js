/**
 * @Description: 请求校验参数获取方法
 */
// import store from "@/store";
import md5 from "md5";
import { v4 as uuidv4 } from "uuid";

// 前后端约定应用标识字符串
const skey = "XXX";

/**
 * 获得请求时间参数
 *
 */
function getTime() {
  return String(Date.now());
}

/**
 * 组装请求数据，计算并装配校验参数
 *
 * @param {object} data 原始请求数据
 * @returns {object} 装配了校验参数/值的请求数据
 */
function getVerificationParams(data) {
  data = typeof data === "object" ? data : {};
  Object.keys(data).forEach((key) => {
    // 删除无效数据
    if (data[key] === undefined || data[key] === null) {
      delete data[key];
    }
  });
  const sortedParams = JSON.stringify(data) + skey;
  return md5(sortedParams);
}

/**
 * 生成请求id
 *
 * @returns 随机字符串
 */
function getRequestId() {
  return uuidv4();
}

/**
 * 获取appId
 *
 * @returns {string} appId
 */
function getAppId() {
  //   return store.state.appId;
  return "appId";
}

/**
 * 获取user_token
 *
 * @returns {string} userToken
 */
function getUserToken() {
  //   return store.state.userToken || "";
  return "token";
}

export { getVerificationParams, getRequestId, getAppId, getTime, getUserToken };
