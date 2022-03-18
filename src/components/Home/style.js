import styled from "styled-components";

const Container = styled.div`
    color: #005E9C;
    display: flex;
    flex-direction: column;
    article{
        display: flex;
        flex-direction: column;
        align-items: center;
        div.guide{
            margin: 3vh 5vw;
            font-size: 40px;
        }
        div.cxselect{
            margin: 10vh 0 15vh 0;
            select{
                width: 130px;
                height: 25px;
                text-align: center;
                color: #005E9C;
                border-color: #005E9C;
                border-width: 0.13rem;
                border-radius: 1rem;
            }
        }
        div.cx-list-a{
            width: 95vw;
            margin: 0 0 15vh 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            div{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5rem 0 0 0;
                flex-wrap: wrap;
                a{
                    margin: 1em;
                    padding: 0.5rem 1rem;
                    cursor: pointer;
                }
            }
            p.filt-date{
                margin: 1em;
                padding: 0.5rem 3rem;
                background-color: #005E9C;
                color: #F8F8F8;
                font-weight: bold;
                border-radius: 10rem;
            }
        }
        div.cx-list-d{
            display: none;
        }

    }
    section{
        overflow-x: auto;
        table{
            width: 100%;
            text-align: center;
            border-spacing: 0 0.5rem;
            thead{
                th{
                    padding: 1rem 2rem;
                }
            }
            tbody{
                td{
                    font-weight: bold;
                    padding: 3rem 2rem;
                    background-color: #F8F8F8;
                    color: #050F68;
                }
            }
        }
    }
    
    footer{
        p{
            text-align: center;
            font-size: 93.75%;
            padding: 1rem;
            a{
                color: #050F68;
                text-decoration: none;
                &:hover{
                    color: #005E9C;
                }
                &:checked{
                    color: #050F68;
                }
            }
        }
    }
    @media (max-width: 600px) {
        article{
            div.guide{
                font-size: 25px;
            }
        }
    }
`;

export default Container;