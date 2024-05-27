import './Btns.css'

export default function GreenOutlineBtn(props:any) {
  return (
    <button className={props.class?props.class+' btn btn-outline-green rounded-pill px-3 py-1 fs-5':'btn btn-outline-green rounded-pill px-3  py-1 fs-5'}>{props.value} {props.icon}</button>
  )
}
