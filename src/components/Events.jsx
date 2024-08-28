/* eslint-disable react/no-unescaped-entities */
import Image from '../Images/Image.png';
import Video from '../Images/Video.png';
import Group from '../Images/Group.svg';
export default function Events() {
  return (
    <div className="events">
      <div className="container">
      <img src={Group} alt="" className='group' />
            <div className="text">
                <p>You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.</p>
                <div className="information">
                    <div className="textInformation">
                        <h5>Khalid Al Dawsry</h5>
                        <p>Jeddah, Saudi</p>
                    </div>
                    <div className="image">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
            <img src={Video} alt="" className='video'/>
       </div>
    </div>
  )
}
