import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'

class CounterCom extends React.Component {
  render() {
    const value = this.props.value
    const onAddClick = this.props.onAddClick
    const onSubClick = this.props.onSubClick
    return (
      <div className="counterContainer">
        <h1>计数结果：{value}</h1>
        <Button className="control_btn" onClick={onAddClick}>
          +1
        </Button>
        <Button className="control_btn" onClick={onSubClick}>
          -1
        </Button>
        <Button className="control_btn" onClick={this.goBack}>
          返回首页
        </Button>
      </div>
    )
  }

  goBack = () => {
    this.props.history.push('/')
  }
}

const mapStateToProps = function (state) {
  return {
    value: state.num,
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    onAddClick: () => dispatch({ type: 'add' }),
    onSubClick: () => dispatch({ type: 'sub' }),
  }
}

const Counter = connect(mapStateToProps, mapDispatchToProps)(CounterCom)

export default withRouter(Counter)
