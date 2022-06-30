import "./Grids.css"
import {BsFillPencilFill, BsGlobe} from 'react-icons/bs';
import {AiFillCompass} from 'react-icons/ai';
import {TbHeartHandshake} from 'react-icons/tb';

function Grids() {
  return (
    <div className="grid-container">
        <div className="grid-col">
            <BsFillPencilFill className="icon"/>
            <h2 className="grid-heading">
                 We are learners
            </h2>
            <p className="grid-desc">
            Enjoy a yearly learning stipend, office-wide learning events, unlimited access to Udemy courses, plus a monthly DEAL hour — a time for the whole company to drop everything and learn. Want to try teaching? Use our in-house production studio to film courses.
            </p>
        </div>
        <div className="grid-col">
            <AiFillCompass className="icon"/>
            <h2 className="grid-heading">
                We are navigators
            </h2>
            <p className="grid-desc">
                When people feel supported, everyone benefits. We want our employees to develop skills for their careers — not just their current roles. Take advantage of regular workshops and trainings designed to help you reach your professional goals.
            </p>
        </div>
        <div className="grid-col">
            <TbHeartHandshake className="icon"/>
            <h2 className="grid-heading">
                 We make an impact

            </h2>
            <p className="grid-desc">
                When people feel supported, everyone benefits. We want our employees to develop skills for their careers — not just their current roles. Take advantage of regular workshops and trainings designed to help you reach your professional goals.
            </p>
        </div>
        <div className="grid-col">
            <BsGlobe className="icon"/>
            <h2 className="grid-heading">
                We are global

            </h2>
            <p className="grid-desc">
            We’re based in San Francisco, but we’ve had a global mindset from the start. Since our company first began in Turkey in 2009, we’ve built an international community of students, instructors, and employees working in five offices around the world.
            </p>
        </div>

    </div>  
  )
}

export default Grids