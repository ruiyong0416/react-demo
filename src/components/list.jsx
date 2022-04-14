import React from 'react'
import './list.Module.css'

/**
 * @description 列表渲染
 * 注意：列表渲染需要给列表的每个项添加一个唯一的key，这会优化react的domDiff
 * 如果列表顺序是可变的，注意避免使用index作为key，因为这可能会导致性能消耗或者视图更新错乱
 */
export class ListComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  
  /**
   * @description 失焦事件
   */
  handleBlur = (e) => {
    const number = +e.target.value || 0
    this.setState({number})
  }

  /**
   * @description 列表渲染函数
   */
  renderList() {
    const l = this.state.number
    const els = [...new Array(l)].map((_, index) => {
      return (
        <li className="item" key={index}>第{index + 1}项</li>
      )
    })
    return (
      <ul className="list-wrap">{els}</ul>
    )
  }

  render() {
    return (
      <div className="list">
        <h3>列表渲染</h3>
        <div className="controler">
          <input type="text" placeholder="请输入列表数量" onBlur={this.handleBlur} />
        </div>
        <div className="content">{this.renderList()}</div>
      </div>
    )
  }
}