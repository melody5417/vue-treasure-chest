const Mock = require('mockjs');
import studentsData from './students';

[studentsData].map(item => {
  Mock.mock(item.url, item.method, item.data);
});
