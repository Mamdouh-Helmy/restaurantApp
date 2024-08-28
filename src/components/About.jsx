import image1 from '../Images/image 1.png'
function About() {

  return (
    <div className="about">
        <div className="container">
            <div className="image">
                <img src={image1} alt="" />
            </div>
            <div className="text">
                <h1>About Us</h1>
                <p>Welcome to [MAIZ], where culinary passion meets the art of fine dining. Our restaurant is dedicated to offering an exceptional dining experience, featuring a fusion of traditional and modern flavors. Every dish is crafted with the freshest ingredients and the utmost care, ensuring a memorable meal for every guest.</p>
                <button>Our Menu</button>
            </div>
        </div>
    </div>
  );
}

export default About;
