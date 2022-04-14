import React from 'react'
import './conditionRender.Module.css'
/**
 * @description 条件渲染
 */
export class ConditionComp  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      type: '',
    }
  }

  /**
   * @description 展示
   */
  handleToogleShow = () => {
    this.setState({show: !this.state.show})
  }

  /**
   * @description 设置类型
   */
  handleSetType = (type) => {
    this.setState({type})
  }

  /**
   * @description 消息盒子渲染函数
   */
  renderBox() {
    const { type } = this.state
    if (type === '') return null
    let ele = (<div className="box success">成功</div>)
    if (type === 'warning') {
      ele = (<div className="box warning">警告</div>)
    }
    if (type === 'fail') {
      ele = (<div className="box fail">失败</div>)
    }
    return ele
  }

  render() { 
    return (
      <div className="condition">
        <h3>消息盒子条件渲染</h3>
        <div className="controler">
          <button onClick={this.handleToogleShow}>{this.state.show ? '隐藏' : '展示'}</button>
          <button onClick={() => this.handleSetType('success')}>成功</button>
          <button onClick={() => this.handleSetType('warning')}>警告</button>
          <button onClick={() => this.handleSetType('fail')}>失败</button>
        </div>
        <div className="content">
          {this.state.show && this.renderBox()}
        </div>
      </div>
    );
  }
}
