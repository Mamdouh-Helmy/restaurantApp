import Vector from '../Images/Vector.png';
import Grou230 from '../Images/Group 230.png';
export default function Menu() {
  return (
    <div className="menu">
        <img src={Grou230} alt="" />
      <div className="text">
        <img src={Vector} alt="" />
        <h1>A unique menu that reflects the true essence of the Saudi cuisine</h1>
        <button className='btn-clcik'>Our Menu</button>
      </div>
    </div>
  )
}
