import axios from 'axios'

let baseUrl = 'http://localhost:8080/'

let resFun = {
  // 请百万答题数据
  async daTiFun() {
    let page = parseInt(Math.random() * 1600)
    let reqUrl = `${baseUrl}api/dati?page=${page}`
    let res = await axios.get(reqUrl)
    return res.data
  },

  // 请求实时疫情数据
  async epidemicFun() {
    let reqUrl = `${baseUrl}api/epidemic`
    let res = await axios.get(reqUrl)
    return res.data
  },

  // 请求新闻实时数据
  async newsFun() {
    let reqUrl = `${baseUrl}api/news`
    let res = await axios.get(reqUrl)
    return res.data
  },
}

export default resFun
