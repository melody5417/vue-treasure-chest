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

export function addStudent(params) {
  const options = {
    url: '/addStudent',
    method: 'post',
    data: params
  };
  if (enableMock) {
    options.baseURL = '';
  }
  return request(options);
}

export function deleteStudent(params) {
  const options = {
    url: '/deleteStudent',
    method: 'post',
    data: params
  };
  if (enableMock) {
    options.baseURL = '';
  }
  return request(options);
}
