/**
 * @description 复用组件
 * 可以被多次复用的组件，例如在页面中我们需要被大量使用的组件
 * 如：button，input，dialog...
 */
import './multComp.Module.css'

export function MultFnComp() {
  return (
    <div className="multFnComp">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
    </div>
  )
}

/**
 * @description 按钮组件
 * props: 
 *   type - default(默认)/primary/danger
 */
function Button(props) {
  const typeName = props.type || 'default'
  return (
    <button className={'btn ' + typeName}>{props.children}</button>
  )
}