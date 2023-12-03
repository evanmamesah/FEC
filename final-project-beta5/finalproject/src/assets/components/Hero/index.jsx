const Hero = () => {
  return (
    <div className="slider-wrapper theme-default">
        <div id="slider" className="nivoSlider">
          <img src="images/slide1.jpg" alt />
          <a href="http://geeksband.com">
            <img
              src="images/slide2.jpg"
              alt
              title="This is an example of a caption with a link"
            />
          </a>
          <img
            src="images/slide3.jpg"
            alt
            title="This is an example of a caption"
          />
          <img src="images/slide4.jpg" alt />
        </div>
      </div>
  )
}

export default Hero