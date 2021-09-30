import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

    const ButtonCustom = styled(Box)`
        background: ${({ primary }) => (primary ? '#c5473b' : '#fff')};
        white-space: nowrap;
        outline: none;
        border-radius: 2px;
        min-width: 90px;
        width: max-content;
        cursor: pointer;
        text-decoration: none;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: ${({ big }) => (big ? '10px 30px' : '14px 24px')};
        font-size: ${({ big }) => (big ? '16px' : '14px')};
        color: ${({ primary }) => (primary ? '#fff' : '#c5473b')};
        border: 1px solid #c5473b;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
            transform: scale(1.02)
        }
    `
export default ButtonCustom;