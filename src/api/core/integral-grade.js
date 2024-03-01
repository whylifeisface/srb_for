import request from '@/utils/request'

export default {
    // 获取积分等级列表
    list(){
      return request({
            // 请求地址
            url: "/admin/core/integralGrade/list",
            // 请求方式
            method: "get",
        })  
    }
}