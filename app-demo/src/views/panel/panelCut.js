import React from 'react'
import Random from '../dati/Random'
import Epidemic from '../yiqing/Epidemic'
import News from '../news/News'
import Counter from '../counter/Counter'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Panel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabIndex: 0,
      navItem: ['百万答题', '实时疫情', '新闻动态', '计数工具'],
      barStyle: {
        left: '22px',
      },
      tabStyle: {
        transform: 'translate(0, 0)',
      },
    }
  }

  render() {
    return (
      <div className="tabContainer">
        {/* 导航条 */}
        <div className="navBox">
          {this.state.navItem.map((item, index) => {
            if (index === this.state.tabIndex) {
              return (
                <div
                  className="navItem active"
                  key={index}
                  onClick={() => this.navClickEvent(index)}
                >
                  {item}
                </div>
              )
            } else {
              return (
                <div
                  className="navItem"
                  key={index}
                  onClick={() => this.navClickEvent(index)}
                >
                  {item}
                </div>
              )
            }
          })}
          <div className="barItem" style={this.state.barStyle}></div>
        </div>

        {/* 切换面板 */}
        <div className="tabBox" style={this.state.tabStyle}>
          <Random></Random>
          <Epidemic></Epidemic>
          <News></News>
          <Counter></Counter>
        </div>
      </div>
    )
  }

  navClickEvent = (index) => {
    console.log(index)
    this.setState({
      tabIndex: index,
      barStyle: {
        left: index * 88 + 22 + 'px',
      },
      tabStyle: {
        transform: `translate(-${index * 375}px, 0)`,
      },
    })
  }
}

export default Panel
