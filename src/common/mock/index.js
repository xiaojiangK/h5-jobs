//引入mockjs
import Mock from 'mockjs'
import jobs from './jobs.js'

// 使用mockjs模拟数据
Mock.mock('/api/jobs/support', {
    code: 0,
    data: jobs['support']
})

Mock.mock('/api/jobs/product', {
    code: 0,
    data: jobs['product']
})

Mock.mock('/api/jobs/front', {
    code: 0,
    data: jobs['front']
})

Mock.mock('/api/jobs/end', {
    code: 0,
    data: jobs['end']
})

Mock.mock('/api/jobs/practice', {
    code: 0,
    data: jobs['practice']
})

