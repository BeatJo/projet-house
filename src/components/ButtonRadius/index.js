import { Link } from "react-router-dom";

const ButtonRadius = ({title, path, borderColor, color, fontColor, fontSize}) => {
    
    return (
        <Link
            to={path}
            style={{
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
        >{title}</Link>
    )
}

export default ButtonRadius;