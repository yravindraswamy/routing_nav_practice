import Container from '../Container'

// Write your JS code here

const imageUrl = 'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'
const alt = 'about'

const About = () => (
  <>
    <Container imageUrl={imageUrl} alt={alt} heading="About" />
    <h1 className="contact-description">
      I live to create! I am fronted web developer
    </h1>
  </>
)
export default About
