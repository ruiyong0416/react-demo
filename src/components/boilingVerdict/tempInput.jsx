import React from 'react'

const TYPE_ENUM = {
  c: '摄氏度',
  f: '华氏度'
}

export class TempInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: ''
    }
  }

  handleOnChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value)
  }

  handleOnFocus = (e) => {
    this.props.onFocus && this.props.onFocus(e)
  }

  render() {
    return (
      <div className="temp-input-wrap">
        <label>{ this.props.type && `${TYPE_ENUM[this.props.type]}：` }</label>
        <input type="text" value={this.props.value} onChange={this.handleOnChange} onFocus={this.handleOnFocus} />
      </div>
    )
  }
}