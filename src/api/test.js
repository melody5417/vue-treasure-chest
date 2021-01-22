import request from '@/utils/request';

export function queryList(params) {
  return request({
    url: '/XXXX',
    method: 'post',
    params
  });
}
