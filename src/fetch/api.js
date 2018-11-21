import axios from 'axios'
import {
  Message
} from 'element-ui'
// axios 配置
//axios.defaults.timeout = 0
axios.defaults.headers.post['Content-Type'] = 'application/json;'

axios.defaults.baseURL = process.env.API_ROOT
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://website.qingju.cn/'

// POST传参序列化------------------此方法没有
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    // config.data = qs.stringify(config.data);
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (res.data.errorCode !== '200') {
    const code = res.data.errorCode
    // 登录状态丢失，未登录 1004
    if (code === '1001') {
      window.location.href = window.location.pathname === '/' ? '/' : '/login'
    }
    return Promise.reject(res)
  }
  return res
}, (error) => {
  Message.error('网络异常')
  return Promise.reject(error)
})

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
        console.log(error);
        //Message.error(error.data.errorMsg)
      })
  })
}

export function get (url, params) {
  return new Promise((resolve, reject) => {
    // 时间戳防止浏览器本地缓存
    var getTimestamp = new Date().getTime()
    if (url.indexOf('?') > -1) {
      url = url + '×tamp=' + getTimestamp
    } else {
      url = url + '?timestamp=' + getTimestamp
    }
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export var axiosCopy = axios;
const api = {
  // 登录
  publishPeopleLogin(params) {
    return post('/user/login', params)
  },
  //注销 /home/logout
  logout() {
    return get('/user/logout')
  },
  addOrUpdateTalking(params) {
    return post('/talking/addOrUpdateTalking', params)
  },
  //商务合作
  //查询
  getCooperationApplyByCondition(params) {
    return post('/CooperationApply/getCooperationApplyByCondition', params)
  },
  //添加修改
  addOrUpdateCooperationApply(params) {
    return post('/CooperationApply/addOrUpdateCooperationApply', params)
  },
  //意见反馈
  //查询
  getFeedbackByCondition(params) {
    return post('/feedback/getFeedbackByCondition', params)
  },
  //添加修改
  addOrUpdateFeedback(params) {
    return post('/feedback/addOrUpdateFeedback', params)
  },
  //政策研读
  //查询
  getPolicyStudyByCondition(params) {
    return post('/PolicyStudy/getPolicyStudyByCondition', params)
  },
  //添加或修改
  addOrUpdatePolicyStudy(params) {
    return post('/PolicyStudy/addOrUpdatePolicyStudy', params)
  },
  //获取详情
  getDetails_yd(id) {
    return get('/PolicyStudy/getDetails/' + id)
  },
  //根据id来进行删除
  delById_yd(id) {
    return get('/PolicyStudy/delById/' + id)
  },
  //公司动态
  //添加修改
  addOrUpdateCompanyNews(params) {
    return post('/companyNews/addOrUpdateCompanyNews', params)
  },
  //id 详情
  getDetailsgs(id) {
    return get('/companyNews/getDetails/' + id)
  },
  //条件查询
  getCompanyNewsByCondition(params) {
    return post('/companyNews/getCompanyNewsByCondition', params)
  },
  //id 删除
  delByIdgs(id) {
    return get('/companyNews/delById/' + id)
  },
  //行业动态
  getIndustryNewsByCondition(params) { //分页搜索数据
    return post('/IndustryNews/getIndustryNewsByCondition', params)
  },
  //详情
  getDetails(id) {
    return get('/IndustryNews/getDetails/' + id)
  },
  //更换
  addOrUpdateIndustryNews(params) {
    return post('/IndustryNews/addOrUpdateIndustryNews', params)
  },
  //删除
  delById(id) {
    return get('/IndustryNews/delById/' + id)
  },
  //查询所有图片
  getAllImg() {
    return get('/websiteConfig/getAllImg')
  },
  //删除图片
  delImg(websiteConfigId) {
    return get('/websiteConfig/delImg/' + websiteConfigId)
  },
  //添加或修改图片
  addOrModifyImg(params) {
    return post('/websiteConfig/addOrModifyImg', params)
  },
  //上传单个文件
  file_uploadSingleFile(params) {
    return post('/file/uploadSingleFile/', params)
  },
  //啸谈风云 查看信息
  getTalkingByCondition(params) {
    return post('/talking/getTalkingByCondition/', params)
  },
  //啸谈风云 {id}/{operateType}
  talkingMove(id,operateType) {
    return get(`/talking/move/${id}/${operateType}`)
  },
  //置顶文章
  topping(id) {
    return get('/companyNews/topping/' + id)
  },
  //取消置顶
  cancelTopping(id) {
    return get('/companyNews/cancelTopping/' + id)
  },
  //查看所有的顶置
  getAllToppings() {
    return get('/companyNews/getAllToppings/')
  },
  getByType(isTop) {
    return get('/companyNews/getByType/'+isTop)
  },
  //轮播图移动
  websiteConfigMove(websiteConfigId,operateType) {
    return get(`/websiteConfig/move/${websiteConfigId}/${operateType}`)
  },
  
  
  
}
export default Object.assign(axiosCopy, api)
