import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import resFun from '../../store/asyncMethods'
import bannerImg from '../../assets/imgs/banner.jpg'
import loadingImg from '../../assets/imgs/loading.gif'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'

class NewsCom extends React.Component {
  componentDidMount() {
    this.props.getNewsList()
  }

  render() {
    if (this.props.isNewsLoading) {
      let newsData = JSON.parse(this.props.newsList)
      let dataList = newsData.sub_raw_datas

      let arrArr = dataList.map((item, index) => {
        return (
          <div className="newsItem" key={index}>
            <div className="time">{item.raw_data.showtime_string}</div>
            <div className="content">{item.raw_data.desc}</div>
          </div>
        )
      })

      return (
        <div className="newsContainer">
          <div className="banner">
            <img src={bannerImg} alt="banner"></img>
          </div>
          <Button className="back_btn" onClick={this.goBack}>
            返回首页
          </Button>
          <div className="newsContent">
            <div className="line"></div>
            <div className="newsList">{arrArr}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="loading">
          <img src={loadingImg} alt="loading" />
        </div>
      )
    }
  }

  goBack = () => {
    this.props.history.push('/')
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getNewsList: async () => {
      let resList = await resFun.newsFun()
      dispatch({
        type: 'news',
        content: resList.data[0].content,
        isNewsLoading: true,
      })
    },
  }
}

const mapStateToProps = function (state) {
  return { ...state }
}

const News = connect(mapStateToProps, mapDispatchToProps)(NewsCom)

export default withRouter(News)
