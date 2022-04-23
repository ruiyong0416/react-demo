import './App.Modules.css'
import { ClockV2 } from './components/clockV2'
import jsxExpression from './components/jsxExpression'
import { SignleFnComp } from './components/singleComp'
import { MultFnComp } from './components/multComp'
import { EventComp } from './components/event'
import { ConditionComp } from './components/conditionRender'
import { ListComp } from './components/list'
import { FormComp } from './components/form'
import { BoilingVerdictComp } from './components/boilingVerdict'

function renderLayout(key) {
  switch(key) {
    // jsx表达式
    case 'jsxExpression': 
      return jsxExpression;
    // 单一组件及props
    case 'signleFnComp':
      return <SignleFnComp name={key} />
    // 复用组件
    case 'multFnComp':
      return <MultFnComp />
    // 事件处理
    case 'eventComp':
      return <EventComp />
    // 条件渲染
    case 'conditionComp':
      return <ConditionComp />
    // 列表渲染
    case 'listComp':
      return <ListComp />
    // 表单
    case 'formComp':
      return <FormComp />
    // 状态提升
    case 'boilingVerdictComp':
      return <BoilingVerdictComp />
    default: 
      return (<div>我是默认的</div>)
  }
}

/**
 * @description 选择渲染哪种时钟
 * 如果指定type为advance，则渲染进阶版（类组件）
 */
function renderClock(type) {
  if (type === 'advance') {
    return <ClockV2 />
  }
  import('./components/clock')
  return (<div id="clock"></div>)
}

export default function App() {
  return (
    <div className="app">
      <h3 className="title">欢迎尝试使用react</h3>
      { renderClock('advance') }
      { renderLayout('boilingVerdictComp') }
    </div>
  )
}
