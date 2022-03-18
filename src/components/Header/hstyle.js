import styled from "styled-components";

const Head = styled.header`
        width: 95vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        padding-right: 1vw;
        ol{
            list-style-type: none;
            display: flex;
            width: 165px;
            justify-content: space-between;
        };
        a{
            text-decoration: none;
            color: #005E9C;
            transition: 0.3s;
            &:hover{
                color: #0093F5;
                transition: 0.3s;
            }
        };
        img.covid-l{
            width: 300px;
        };
        img.imghb{
            display: none;
            width: 8vw;
        };
        @media (max-width: 600px) {
            ol{
                display: none;
            };
            ol.normal-d{
                display: none;
            };
            img.covid-l{
                width: 80%;
            };
            img.imghb{
                display: flex; 
            };
            div{
                display: flex;
                justify-content: flex-end;
                position: fixed;
                width: 100vw;
                ol.normal-a{
                    width: 100%;
                    padding: 8rem 0 1rem 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    background-color: #ffff;
                    li{
                        padding: 1em;
                    }
                };
            }
            
        }
`;

export default Head;