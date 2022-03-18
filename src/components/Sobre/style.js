import styled from "styled-components";

const ContSobre = styled.article`

    display: flex;
    justify-content: center;
    overflow-x: auto;
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100vw;
        color:  #005E9C;
        img.prof{
            width: 200px;
            border-radius: 50%;
            margin: 2em 0;
            animation: go-back 5s infinite;
        }
        @keyframes go-back {
            0% {
                transform: scale(0.9);
            }
            50% {
                transform: scale(1);
            }
            100% {
                transform: scale(0.9);
            }
        }
        h4{
            margin: 0 1rem;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            overflow-x: hidden;
            animation: comes-h 1s;
            &::after{
                content: "";
                margin: 0.5em;
                width: 55vw;
                height: 2px;
                background-color: #005E9C;
            }
        }
        @keyframes comes-h {
            0% {
                transform: translateX(-100vw);
            }
            50% {
                transform: scale(0.9);
            }
            100% {
                transform: scale(1);
            }
        }
        h3{
            margin: 1em 0;
            animation: comes-t 1s;
        }
        a{
            cursor: default;
        }
        button{
            color: #005E9C;
            margin: 1em 0 3em 0;    
            padding: 1.2em;
            font-weight: bold;
            border-radius: 10em;
            border: none;
            background-color: #F8F8F8;
            cursor: pointer;
            transition: 0.3s;
            animation: comes-b 1s;
            &:hover{
                background-color: #0093F5;
                color: #F8F8F8;
            }
        }
        @keyframes comes-b {
            0% {
                transform: translateX(-100vw);
            }
        }
        div{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            animation:go-back 5s infinite ,comes-t 1s;
            img.tec{
                width: 100px;
                margin: 20px;
            }
        }
        @keyframes comes-t {
            0% {
                transform: translateX(200vw);
            }
        }
    }

`;

export default ContSobre;