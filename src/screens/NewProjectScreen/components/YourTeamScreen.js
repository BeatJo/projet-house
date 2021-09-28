import { Box } from "@mui/material";
import { GrMail } from "react-icons/gr";
import { MdAddCircle, MdPhoneInTalk } from "react-icons/md";
import Popup from "reactjs-popup";
import { expertsData } from "../../../data/homeData";


const YourTeamScreen = () => {
  return ( 
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{width: "25ch"}}>
      <div className="experts-component">
              <div style={{width: '100%'}}>
                <img className="experts-image" alt="img" src={expertsData[0].image} />
              </div>
              <div className="experts-name">{expertsData[0].name}</div>
              <div style={{overflow: "ellipsis"}} className="experts-bio"><p>{expertsData[0].role}</p></div>
              <div className="experts-button">
                
                <Popup
                  trigger={<MdAddCircle className="experts-button-icon" fill="#c5473b" size={40} />}
                  modal
                  nested

                >
                  {close => (
                    <div className="modal">
                      <button className="close-modal" onClick={close}>
                        &times;
                      </button>
                      <div className="modal-content">
                        <img className="modal-image" alt="img" src={expertsData[0].image} />
                        <div className="modal-text">
                          <p style={{marginTop: 0, color: "#c5473b", fontSize: 25, marginBottom: 0}}>{expertsData[0].name}</p>
                            <div style={{marginBottom:20}}>{expertsData[0].role}</div>
                            <div style={{marginTop: 0, color: "#c5473b", fontSize: 25}}>Biographie</div>
                            {expertsData[0].bio}
                          <p className="contact-modal">
                          <MdPhoneInTalk fill="#c5473b" size={20} style={{marginRight: 5}} /> 
                          {expertsData[0].tel}
                          <GrMail fill= "#c5473b" size={20} style={{marginLeft:20, marginRight: 5}} /> 
                          {expertsData[0].email}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Popup>
                </div>
            </div>
      </Box>
    </Box>
   );
}
 
export default YourTeamScreen;