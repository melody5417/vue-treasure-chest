import request from "./index";

export function getARequest(params) {
  const data = Object.assign(
    {
      appendKey: 'appendValue',
    },
    params,
  );
  return request({
    baseURLType: "A",
    url: "/api/getARequest",
    method: "get",
    data
  });
}
