import { Link } from "react-router-dom";
import { sectionAct } from "../data/projectsData";
import logo from "../assets/img/logoWhite.png";

const TableauBord = () => {
    return (

        
        

        <div className="grid-container">

        {sectionAct.map((item, index) => (
          <article key={index} className="location-listing">
            <Link className="location-title" to={`/Projects/${index}/${item.name}`}>
                {item.name}           
            </Link>
            <div className="location-image">
              <Link to={`/Projects/${index}/${item.name}`}>
                <img className="img-projects" src={item.image} />    
              </Link>
            </div>
          </article>
        ))}
      </div>

    );
}

export default TableauBord;