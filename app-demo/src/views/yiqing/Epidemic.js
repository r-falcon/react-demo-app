import React from 'react'
import resFun from '../../store/asyncMethods'
import { connect } from 'react-redux'
import Map from '../../components/Map'
import Search from '../../components/Search'
import loadingImg from '../../assets/imgs/loading.gif'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'

class EpidemicCom extends React.Component {
  componentDidMount() {
    this.props.getEpidemicList()
  }

  render() {
    console.log(this.props.isEpidemicLoading)
    if (this.props.isEpidemicLoading) {
      let dataList = JSON.parse(this.props.epidemicList)
      let epidemicData = dataList.provinces

      let arrArr = epidemicData.map((item, index) => {
        return (
          <li className="detailMain" key={index}>
            <p>{item.name}</p>
            <p>{item.confirmedNum}</p>
            <p>{item.curesNum}</p>
            <p>{item.deathsNum}</p>
          </li>
        )
      })

      return (
        <div className="epidemicContainer">
          <h1>实时疫情展示</h1>
          {/* 疫情地图 */}
          <Map cityList={epidemicData}></Map>
          {/* 搜索框 */}
          <Search cityList={epidemicData}></Search>
          <div className="detailContainer">
            <h1>实时疫情列表数据</h1>
            <ul className="detailBox">
              <li className="detailMain">
                <h2>地区</h2>
                <h2>确诊</h2>
                <h2>治愈</h2>
                <h2>死亡</h2>
              </li>
              {arrArr}
            </ul>
          </div>
          <Button className="back_btn" type="warning" onClick={this.goBack}>
            返回首页
          </Button>
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
    getEpidemicList: async () => {
      let resList = await resFun.epidemicFun()
      dispatch({
        type: 'epidemic',
        content: resList.forum.extra.ncov_string_list,
        isEpidemicLoading: true,
      })
    },
  }
}

const mapStateToProps = function (state) {
  return { ...state }
}

const Epidemic = connect(mapStateToProps, mapDispatchToProps)(EpidemicCom)

export default Epidemic
