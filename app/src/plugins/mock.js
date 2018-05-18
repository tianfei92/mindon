import Mock from 'mockjs'
import caseData from '../mockData/case'

Mock.mock('/api/case', 'post', function(options) {
    let params = JSON.parse(options.body);
    let caseId = params.caseId
    return {
        success: true,
        data: caseData.case_1
    }
})

export default Mock;