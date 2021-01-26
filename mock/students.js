const Mock = require("mockjs");
const Random = Mock.Random;

let studentsData = [];

const queryStudentsData = {
  url: "/queryStudents",
  type: "post",
  data: (res = {}) => {
    const opt = JSON.parse(res.body);
    if (studentsData.length == 0) {
      const data = [];
      for (let i = 0; i < 20; i++) {
        const student = {
          id: Random.id(),
          name: Random.cname(),
          address: Random.city(),
          class: opt.class,
        };
        data.push(student);
      }
      studentsData.push(...data);
    }
    const rsp = { errCode: 0, data: studentsData };
    return rsp;
  }
};

const addStudentData = {
  url: "/addStudent",
  type: "post",
  data: (res = {}) => {
    const opt = JSON.parse(res.body);
    if (opt.name.length > 0) {
      const student = {
        id: Random.id(),
        name: opt.name,
        address: Random.city(),
        class: opt.class,
      };
      studentsData.push(student);
    }
    const rsp = { errCode: 0, data: studentsData };
    return rsp;
  }
};

const deleteStudentData = {
  url: "/deleteStudent",
  type: "post",
  data: () => {
    studentsData.splice(0, 1);
    const rsp = { errCode: 0, data: studentsData };
    return rsp;
  }
};

export default [queryStudentsData, addStudentData, deleteStudentData];
