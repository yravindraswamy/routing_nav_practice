import './index.css'

const Container = props => {
  const {imageUrl, alt, heading} = props
  return (
    <div className="container">
      <img src={imageUrl} className="Image" alt={alt} />
      <h1 className="heading">{heading}</h1>
    </div>
  )
}
export default Container
