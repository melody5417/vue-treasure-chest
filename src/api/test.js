import request from '@/utils/request';

const enableMock = true;

export function queryStudents(params) {
  const options = {
    url: '/queryStudents',
    method: 'post',
    data: params
  };
  if (enableMock) {
    options.baseURL = '';
  }
  return request(options);
}
