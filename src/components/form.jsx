/**
 * @description 表单组件
 * 把表单元素input/textarea/select变为受控组件时（即绑定了value属性）
 * 需要配合绑定onChange事件来修改元素状态
 */
import React from 'react'
import './form.Module.css'

export class FormComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '受控组件，默认内容',
      textarea: '文本域默认内容',
      select: 'window',
      selectMult: []
    }
  }

  /**
   * @description input - change事件
   */
  handleInputChange = (e) => {
    // 当你把input作为受控组件时，即绑定了value属性
    // 如果不提供onChange事件，会有一个warning警告：该表单元素将会成为一个只读元素
    this.setState({
      input: e.target.value
    })
  }

  /**
   * @description select - change事件
   */
  handleSelectChange(e) {
    // 不应该在option元素上设置selected属性表示默认选择
    // 这么做会有一个警告，正确做法是在select元素上绑定一个value
    this.setState({
      select: e.target.value
    })
  }

  /**
   * @description select多选 - change事件
   * 多选时，select的value属性需要绑定数组
   */
   handleSelectMultChange(e) {
    const value = e.target.value
    const selectMult = this.state.selectMult
    const index = selectMult.indexOf(value)
    index >= 0 ? selectMult.splice(index, 1) : selectMult.push(value)
    this.setState({
      selectMult
    })
  }

  /**
   * @description 提交操作
   */
  handleSubmit(e) {
    e.preventDefault()
    const form = {}
    ;['input', 'textarea', 'select', 'selectMult'].forEach(key => form[key] = this.state[key])
    console.log('表单内容：', form)
  }

  render() {
    return (
      <div className="form">
        <h3>表单之受控元素，可查看控制台表单数据</h3>
        <form onSubmit={this.handleSubmit} action="#">
          <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
          <textarea value={this.state.textarea} onChange={(e) => this.setState({textarea: e.target.value})} />
          <select value={this.state.select} onChange={this.handleSelectChange.bind(this)}>
            <option value="mac">Mac</option>
            <option value="window">Window</option>
          </select>
          {/* 多选时，value需要绑定一个array */}
          <select multiple value={this.state.selectMult} onChange={this.handleSelectMultChange.bind(this)}>
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="orange">Orange</option>
          </select>
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </form>
      </div>
    )
  }
}