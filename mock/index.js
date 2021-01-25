// https://github.com/nuysoft/Mock/wiki
import Mock from 'mockjs';
import studentsData from './students';

//延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
});

[...studentsData].map(item => {
  Mock.mock(item.url, item.type, item.data);
});
