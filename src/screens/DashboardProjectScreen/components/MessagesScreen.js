import React, { useState } from 'react';
import { ButtonCustom, ButtonRadius, Container } from '../../../components';
import '../../../styles/Dashboard.css';
import { BiPaperclip, BiPlusMedical } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
import { messagesData } from '../../../data/projectsData';
import { Box, TextField } from '@mui/material';

const MessagesScreen = () => {

    const [page, setPage] = useState("inbox");
    const [message, setMassage] = useState(null)
    const [answer, setAnswer] = useState(false)

    function SetPage(path, item) {
        switch (path) {
            case "new":
                setPage("new")
                break;

            case "read":
                setMassage(item)
                setPage("read")
                break;
        
            default:
                setPage("inbox")
                setAnswer(false)
                break;
        }
    }

    function AnswerBox() {
        setAnswer(!answer)
    }

    return (
        <Container sideBar active="Messages">
            <div style={{display: 'flex', marginBottom:20}}>
               {page ==="inbox" ? <>
                    <ButtonRadius
                        divContent 
                        path={() => SetPage("new")}
                        title="Nouveau message" 
                        borderColor="#c5473b" 
                        icon={<BiPlusMedical />}
                        />
                    <ButtonRadius divContent title="Envoyé" borderColor="#c5473b" />
                </> :
                <div>
                   <BsArrowLeft style={{cursor: 'pointer'}} size={35} fill="grey" onClick={() => SetPage("inbox")} /> 
                </div>}
            </div>
            <div className="dash-container-right">
                {page === "inbox" ?
                    <div>
                        {messagesData.map((item, index) => (
                            <div onClick={() => SetPage("read", item)} key={index} className="message-line">
                                <div style={{marginRight: 20, width: 10, height:10, borderRadius: 20, backgroundColor: item.read ? "green" : "#c5473b"}}>

                                </div>
                                <div style={{flex: 1, fontFamily: 'building', fontSize:20}}>
                                    {item.name}
                                </div>
                                <div style={{flex: 3}} className="message-line-content">
                                    {item.object}
                                </div>
                                <div style={{flex: 1}}>
                                    {item.date} | {item.hour}
                                </div>
                            </div>
                        ))}
                    </div> : page === "new" ? 
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: 'column'}}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '93ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="object"
                                    label="Objet"
                                />
                                <BiPaperclip fill="grey" style={{justifyContent: 'flex-start', marginLeft: 10}} size={30}/>
                                <TextField
                                    id="message"
                                    label="Message"
                                    multiline
                                    rows={10}
                                />
                            </Box>
                            <ButtonCustom primary big >Envoyer</ButtonCustom>
                        </div> : page === "read" ? 
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <img src={message.profile} style={{width: 50, height: 50, border: 'solid', borderWidth: 1, borderRadius: 25, marginRight:15, borderColor: 'gray'}} />
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column'
                                            }}>
                                            <span style={{color: '#c5473b', fontFamily: 'building', fontSize: 25}}>{message.name}</span>
                                            <span>{message.object}</span>
                                            <span style={{color: 'grey'}}>{message.date} | {message.hour}</span>
                                        </div>
                                </div>
                                <div>
                                <p>
                                    {message.content}
                                </p>
                                </div>
                                <div style={{marginTop: 50}}>
                                    {!answer ? <ButtonCustom primary big onClick={() => AnswerBox()}>Repondre</ButtonCustom> :
                                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderTop: 'solid', borderWidth: 1, borderColor: 'gray',}}>
                                        <TextField
                                            id="message"
                                            label="Message"
                                            multiline
                                            rows={10}
                                            sx={{m: 1, mt:5, width: '90ch'}}
                                        />
                                        <div style={{display: 'flex', marginBottom: 50, marginTop: 40, width: "40%", justifyContent: 'space-around'}}>
                                            <ButtonCustom big primary>Envoyer</ButtonCustom>
                                            <ButtonCustom big onClick={() => AnswerBox()}>Annuler</ButtonCustom>
                                        </div>
                                    </div>}
                                </div>
                            </div> : null}
            </div>
        </Container>
    )
}

export default MessagesScreen;