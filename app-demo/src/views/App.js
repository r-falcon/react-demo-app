import React from 'react'
import Button from 'antd-mobile/lib/button'
import 'antd-mobile/lib/button/style/css'

class App extends React.Component {
  randomTest = () => {
    this.props.history.push('/random')
  }

  epidemicDetail = () => {
    this.props.history.push('/epidemic')
  }

  newsShow = () => {
    this.props.history.push('/news')
  }

  counterTool = () => {
    this.props.history.push('/counter')
  }

  panelCut = () => {
    this.props.history.push('/panel')
  }

  render() {
    return (
      <div className="container">
        <h1>选择进入模块</h1>
        <Button type="primary" className="btn" onClick={this.randomTest}>
          百万答题
        </Button>
        <Button type="primary" className="btn" onClick={this.epidemicDetail}>
          实时疫情
        </Button>
        <Button type="primary" className="btn" onClick={this.newsShow}>
          新闻动态
        </Button>
        <Button type="primary" className="btn" onClick={this.counterTool}>
          计数工具
        </Button>
        <Button type="primary" className="btn" onClick={this.panelCut}>
          面板切换
        </Button>
      </div>
    )
  }
}

export default App
