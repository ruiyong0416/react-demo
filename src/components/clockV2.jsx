import React from 'react'
import './clock.Module.css'

/**
 * @description 时钟进阶版 - 类组件
 */
export class ClockV2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  /**
   * @description 生命周期 - 组件挂载
   * Todo：开启定时器，更新时间
   */
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  /**
   * @description 生命周期 - 组件卸载
   * Todo：销毁定时器，释放内存
   */
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div className="clock">
        <div>当前时间：</div>
        <div>{ this.state.date.toLocaleTimeString() }</div>
      </div>
    )
  }
}
