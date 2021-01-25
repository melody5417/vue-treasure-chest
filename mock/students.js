const Mock = require('mockjs');
const Random = Mock.Random;

function students(res = {}) {
  const opt = JSON.parse(res.body);
  const data = [];
  for (let i = 0; i < 20; i++) {
    const student = {
      name: Random.cname(),
      address: Random.city(),
      class: opt.class
    };
    data.push(student);
  }
  const rsp = {errCode: 0, data: data};
  return rsp;
}
const queryStudents = {
    url: '/queryStudents',
    type: 'post',
    data: students
};
export default [queryStudents];

