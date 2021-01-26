const Mock = require("mockjs");
const Random = Mock.Random;

let studentsData = [];

const queryStudentsData = {
  url: "/queryStudents",
  type: "post",
  data: (res = {}) => {
    const opt = JSON.parse(res.body);
    let result = [...studentsData];
    if (opt.name && opt.name.length > 0) {
      result = result.filter((item) => {
        item.name === opt.name;
      });
    }
    if (opt.class && opt.class.length > 0) {
      result = result.filter((item) => {
        item.class === opt.class;
      });
    }
    const rsp = { errCode: 0, data: result };
    return rsp;
  },
};

const addStudentData = {
  url: "/addStudent",
  type: "post",
  data: (res = {}) => {
    const opt = JSON.parse(res.body);
    const student = {
      id: Random.id(),
      name: Random.cname(),
      address: Random.city(),
      class: opt.class,
    };
    studentsData.push(student);
    const rsp = { errCode: 0, data: studentsData };
    return rsp;
  },
};

const deleteStudentData = {
  url: "/deleteStudent",
  type: "post",
  data: () => {
    if (studentsData && studentsData.length > 0) {
      studentsData.splice(0, 1);
      const rsp = { errCode: 0, data: studentsData };
      return rsp;
    } else {
      return { errCode: -1, errMsg: "无有效数据" };
    }
  },
};

export default [queryStudentsData, addStudentData, deleteStudentData];
