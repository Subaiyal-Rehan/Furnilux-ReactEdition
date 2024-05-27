import './Btns.css'

export default function GreenBtn(props:any) {
  return (
    <button className='btn btn-green text-white rounded-pill px-3'>{props.value} {props.icon}</button>
  )
}
