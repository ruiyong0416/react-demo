import React from 'react'
import './event.Module.css'

/**
 * @description 事件绑定处理
 * 注意：react并不会把我们的事件绑定在真是的dom节点上，真实的dom节点会被react使用
 * 一个为 `noop` 的空函数所绑定，而实际绑定的函数被托管在document上
 */
export class EventComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event1: '事件1',
      event2: '事件2',
      event3: '事件3',
    }
  }

  /**
   * @description 事件处理方式1
   */
  handleClick1(...args) {
    // 在jsx中，使用`bind`显示绑定this，确定this指向
    // 如果你不这么做，可尝试事件3的方案
    // 如上述方案都不做，则当前this会指向window，且react默认开启严格模式，this会指向undefined
    // 最终会报错
    // 事件1可以向函数传递参数，且传递时，react的合成事件会在所有形参最后传入，这是react处理好的
    console.log('当前为：', this.state.event1)
    console.log('当前参数：', args)
  }

  /**
   * @description 事件处理方式2
   */
  handleClick2 = (...args) => {
    // 可以在jsx中直接使用，不需要显示绑定
    // 因为箭头函数在执行前就已经确定好this指向，且无法被更改
    // 注意事件2无法向函数传递参数，函数只能获取到react的合成事件 
    console.log('当前为：' ,this.state.event2)
    console.log('当前参数：', args)
  }

  /**
   * @description 事件处理方式3
   */
  handleClick3(...args) {
    // 在jsx中，先使用箭头函数包裹，确定了this指向
    // 当函数被调用时，当前是无this指向，会沿着作用域链查找，寻找上一级的this，即箭头函数确定的this
    // 事件3可以向函数传递参数，且传递时，我们有意的将react的合成事件当作第一个参数传入
    console.log('当前为：', this.state.event3)
    console.log('当前参数：', args)
  }

  render() {
    return (
      <div className="event">
        <h3>事件处理，可打开控制台查看</h3>
        <button onClick={this.handleClick1.bind(this, '1')}>事件1 - 绑定</button>
        <button onClick={this.handleClick2}>事件2 - 箭头函数</button>
        <button onClick={(e) => this.handleClick3(e, '3')}>事件3 - 箭头函数调用</button>
      </div>
    )
  }
}