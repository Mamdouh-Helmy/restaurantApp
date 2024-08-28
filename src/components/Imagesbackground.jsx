/* eslint-disable react/prop-types */
import Rectangle from '../Images/Rectangle.png'

export default function Imagesbackground({ style}) {
  return (
    <div className='images-background' style={{...style}}>
      <img src={Rectangle} alt="Rectangle" />
    </div>
  )
}
