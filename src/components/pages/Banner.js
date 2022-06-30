import "./Banner.css";

function Banner({alt,img,title,desc,backgroundColor}) {
  return (
    <div className="banner-container" style={{backgroundColor:backgroundColor}}>
        <div className="banner">
            <div className="banner-col">
                <h1 className="banner-heading">{title}</h1>
                <p className="banner-desc">{desc}</p>
            </div>
            <img src={img} alt={alt}/>
        </div>
    </div>
  )
}

export default Banner