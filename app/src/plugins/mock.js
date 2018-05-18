import Mock from 'mockjs'

Mock.mock('/api/case', {
  "name": 'lgqlee',
  "result": [5, 34, 767, 9]
})

export default Mock;
