import './App.Modules.css'
import './components/clock'
import jsxExpression from './components/jsxExpression'
import { SignleFnComp } from './components/singleComp'
import { MultFnComp } from './components/multComp'

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
    default: 
      return (<div>我是默认的</div>)
  }
}

export default function App() {
  return (
    <div className="app">
      <h3 className="title">欢迎尝试使用react</h3>
      <div id="clock"></div>
      { renderLayout('multFnComp') }
    </div>
  )
}
