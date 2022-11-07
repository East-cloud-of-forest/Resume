import classNames from 'classnames'
import '../style/Common.scss'

export const Button = ({children, white, circle, width}) => {
  return (<div className={classNames("Button" ,white&&"white", circle&&"circle")}
  style={{width:width}}>
    {children}
  </div>)
}