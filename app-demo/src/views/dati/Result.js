import React from 'react'
import { connect } from 'react-redux'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'

class ResultCom extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="resultContainer">
        <h1>
          恭喜！您一共获得<span>{this.props.location.state.score}</span>分
        </h1>
        <Button type="primary" className="btn" onClick={this.goBack}>
          返回首页
        </Button>
      </div>
    )
  }

  goBack = () => {
    this.props.history.push('/')
  }
}

const mapDispatchToProps = function (dispatch) {
  return {}
}

const mapStateToProps = function (state) {
  return { ...state }
}

const Result = connect(mapStateToProps, mapDispatchToProps)(ResultCom)

export default Result
