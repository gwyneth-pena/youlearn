import "./Features.css"


function Features({color,featuresTitle,featureColumns}) {
  return (
    <div className="features">
        <h1 className="features-title">{featuresTitle}</h1>
    <svg className="features-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={color} fillOpacity="1" d="M0,64L120,58.7C240,53,480,43,720,80C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
    </svg>

        <div className="features-row">
            {featureColumns.length>0?
                featureColumns.map(feature=>{
                    return(
                    <div key={featureColumns.indexOf(feature)} className="features-col">
                        <img src={feature.src} alt={feature.alt} />
                        <h3 className="feature-col-title">{feature.title}</h3>
                        <p className="feature-col-desc">{feature.desc}</p>
                    </div>
                    )
                })
            :""}
        </div>
        
    </div>
  )
}

export default Features