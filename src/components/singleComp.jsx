/**
 * @description 单一组件
 * 可以理解为业务组件，只有某种情况下的使用，无复用
 */
export function SignleFnComp(props) {
  return (
    <div>单一组件, 传递props.name={props.name}</div>
  )
}