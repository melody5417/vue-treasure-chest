/**
 * @Description: 服务域名配置
 *
 * 支持多个域名，多个环境的配置
 */

export const serverABaseURL = () => {
  let baseURL = "https://SERVER_A_PROD.com";
  if (process.env.NODE_ENV === "development") {
    return "https://SERVER_A_DEV.com";
  } else if (process.env.NODE_ENV === "test") {
    return "https://SERVER_A_TEST.com";
  }
  return baseURL;
};

export const serverBBaseURL = () => {
  let baseURL = "https://SERVER_B_PROD.com";
  if (process.env.NODE_ENV === "development") {
    return "https://SERVER_B_DEV.com";
  } else if (process.env.NODE_ENV === "test") {
    return "https://SERVER_B_TEST.com";
  }
  return baseURL;
};
