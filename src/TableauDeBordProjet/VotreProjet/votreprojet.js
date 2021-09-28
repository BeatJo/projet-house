import { Container } from "@mui/material";
import { FaDivide } from "react-icons/fa";
import image1 from "../../assets/img/banproj.png";
import "../../styles/ProjectBord.css";


const InfoProjet = () => {
    return (

        <Container className="content">

            <div className="aside">
                hello
            </div>

            <div className="img-contain">
                <img alt="ban" src={image1} className="img-c"></img>
            </div>
        </Container>
    )
}

export default InfoProjet;