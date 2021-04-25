import request from "./index";
import { setSyncDeltaTime } from './verification'

// 根据业务侧需要定时更新 deltatime
export function syncServerTime() {
  request({
    baseURLType: "A",
    url: "/api/getTime",
    method: "get"
  }).then(rsp => {
    const deltaTime = rsp.data.time - Date.now();
    setSyncDeltaTime(deltaTime);
  }).catch(err => {
    console.error(err);
  });
}