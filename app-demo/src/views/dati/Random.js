import React from 'react'
import { connect } from 'react-redux'
import resFun from '../../store/asyncMethods'
import loadingImg from '../../assets/imgs/loading.gif'

function optLetter(index) {
  if (index === 0) {
    return 'A'
  } else if (index === 1) {
    return 'B'
  } else if (index === 2) {
    return 'C'
  } else {
    return 'D'
  }
}

class RandomCom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentItem: 0,
      optionStyle: ['optItems', 'optItems', 'optItems', 'optItems'],
      isChoose: false,
      score: 0,
    }
  }

  componentDidMount() {
    this.props.getItemList()
  }

  render() {
    let itemArr = this.props.itemList
    let currentNum = this.state.currentItem
    let oStyle = this.state.optionStyle

    if (itemArr.length > 0) {
      let options = JSON.parse(itemArr[currentNum].options)
      return (
        <div className="datiContainer">
          <h1>题目：{itemArr[currentNum].quiz}</h1>
          <div className="optContainer">
            {options.map((item, index) => {
              return (
                <div
                  key={index}
                  className={oStyle[index]}
                  onClick={() => this.answerEvent(index)}
                >
                  {optLetter(index)}、{item}
                </div>
              )
            })}
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

  answerEvent = (index) => {
    if (this.state.isChoose) {
      return true
    }

    let currentAnswer = this.props.itemList[this.state.currentItem].answer
    console.log(currentAnswer)
    let score = this.state.score
    if (index + 1 === Number(currentAnswer)) {
      console.log(111)
      let optionsStyle = this.state.optionStyle
      optionsStyle[index] = 'optItems correct'
      this.setState({
        optionStyle: optionsStyle,
        isChoose: true,
        score: this.state.score + 10,
      })
    } else {
      let optionsStyle = this.state.optionStyle
      optionsStyle[index] = 'optItems error'
      optionsStyle[Number(currentAnswer) - 1] = 'optItems correct'
      this.setState({
        optionStyle: optionsStyle,
        isChoose: true,
      })
    }

    // 跳转下一题
    setTimeout(() => {
      let currentNum = this.state.currentItem
      currentNum++
      if (currentNum === 10) {
        console.log(this.state.score)
        this.props.history.push('/result', { score: this.state.score })
      } else {
        this.setState({
          currentItem: currentNum,
          optionStyle: ['optItems', 'optItems', 'optItems', 'optItems'],
          isChoose: false,
        })
      }
    }, 300)
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    getItemList: async () => {
      let resList = await resFun.daTiFun()
      dispatch({
        type: 'random',
        content: resList,
      })
      console.log(resList)
    },
  }
}

const mapStateToProps = function (state) {
  return { ...state }
}

const Random = connect(mapStateToProps, mapDispatchToProps)(RandomCom)

export default Random
