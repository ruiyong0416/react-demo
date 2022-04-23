import React from 'react'
import { TempInput } from './tempInput'

/**
 * @description 状态提升
 * 当兄弟组件需要共享同一个状态时，应考虑提取至最近的父级进行维护
 */
export class BoilingVerdictComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: '',
      currentType: '',
    }
  }

  handleOnChange = (temp) => {
    console.log(temp, 'temp')
    this.setState({temp})
  }

  tryConvert = (type) => {
    const {currentType, temp} = this.state
    const value = parseFloat(temp)
    if (isNaN(value)) return ''
    if (type === 'c') {
      return currentType === 'c' ? value : toC(value)
    } else {
      return currentType === 'f' ? value : toF(value)
    }
  }

  render() {
    return (
      <div className="boilingVerdict">
        <h3>状态提升，请输入需要验证的水温</h3>
        <div>
          <TempInput type="c" value={this.tryConvert('c')} onChange={this.handleOnChange} onFocus={() => this.setState({currentType: 'c'})} />
          <TempInput type="f" value={this.tryConvert('f')} onChange={this.handleOnChange} onFocus={() => this.setState({currentType: 'f'})} />
          <Result temp={this.tryConvert('c')} />
        </div>
      </div>
    )
  }

}

function toC(value) {
  return (value - 32) * 5 / 9;
}

function toF(value) {
  return (value * 9 / 5) + 32;
}

function Result(props) {
  const msg = props.temp >= 100 ? '已达到沸点' : '未达到沸点'
  return (
    <div>{ msg }</div>
  )
}

