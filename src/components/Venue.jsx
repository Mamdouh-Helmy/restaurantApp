import images3 from '../Images/image 3.png';
import images4 from '../Images/image 4.png';
import images5 from '../Images/image 5.png';
import images6 from '../Images/image 6.png';
export default function Venue() {
  return (
    <div className="venue">
        <div className='container'>
            <div className="images">
                <img src={images3} alt="" />
            </div>
            <div className="text">
                <h1>A distinctive dining destination inspired by the culture.</h1>
                <p>Experience Al Balad old town of Jeddah vibes. </p>
                <button className='btn-clcik'>Our Venue</button>
                <div className="image-text">
                    <div className="box">
                        <img src={images4} alt="" />
                    </div>
                    <div className="box">
                        <img src={images5} alt="" />
                    </div>
                    <div className="box">
                        <img src={images6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
