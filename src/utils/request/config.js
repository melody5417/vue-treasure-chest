/**
 * @Description: 服务域名配置
 */

export const serverABaseURL = () => {
  let baseURL = "https://SERVER_A_PROD.com";
  if (process.env.NODE_ENV === "development") {
    return "https://SERVER_A_DEV.com";
  }
  return baseURL;
};

export const serverBBaseURL = () => {
  let baseURL = "https://SERVER_B_PROD.com";
  if (process.env.NODE_ENV === "development") {
    return "https://SERVER_B_DEV.com";
  }
  return baseURL;
};