import { Link } from "react-router-dom";

const ButtonRadius = ({divContent, title, path, borderColor, color, fontColor, fontSize, icon}) => {
    
    return (
        <>
       {divContent ? <div
            className="button-radius"
            onClick={path}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-evenly',
                padding: 8,
                border: "solid",
                borderWidth: 0.1,
                borderColor: borderColor,
                borderRadius: 30,
                marginRight: 10,
                marginLeft: 10,
                color: fontColor,
                fontSize: fontSize,
                backgroundColor: color,
                cursor: 'pointer',
                width: 'max-content',
                textDecoration: 'none'
            }}
        >{icon && icon} {title}</div> :
        <Link
            className="button-radius"
            to={path}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: 'space-evenly',
                padding: 8,
                border: "solid",
                borderWidth: 0.1,
                borderColor: borderColor,
                borderRadius: 30,
                marginRight: 10,
                marginLeft: 10,
                color: fontColor,
                fontSize: fontSize,
                backgroundColor: color,
                cursor: 'pointer',
                width: 'max-content',
                textDecoration: 'none'
            }}
        >{icon && icon} {title}</Link>}
        </>
    )
}

export default ButtonRadius;