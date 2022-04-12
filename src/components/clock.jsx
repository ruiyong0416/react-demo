import { createRoot } from 'react-dom/client'
import './clock.Module.css'

/**
 * @description 使用定时器配合react-dom的render每一秒更新一次
 * bad!
 */
let clockEl = null
function tick() {
  const element = (
    <div className="clock">
      <div>当前时间：</div>
      <div>{ new Date().toLocaleTimeString() }</div>
    </div>
  )
  clockEl = clockEl || createRoot(document.getElementById('clock'))
  clockEl.render(element)
}

export default setInterval(tick, 1000);
