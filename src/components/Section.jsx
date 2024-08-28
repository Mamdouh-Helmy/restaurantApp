import Vector2 from '../Images/Vector2.png';
import Image1 from '../Images/image 1.png';
import Vector from '../Images/Vector.png'
export default function Section() {
  return (
    <div className="section">
        <div className="container">
            <div className="text">
                <div className="title">
                    <h1>Taste the authentic Saudi cuisine</h1>
                </div>
                <p>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
                <button>Our Menu</button>
                <div className="image">
                    <img src={Vector2} alt="Vector2" />
                </div>
            </div>
            <div className="images">
                <img src={Image1} alt="Image-1" />
                <div className="image">
                    <img src={Vector} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
