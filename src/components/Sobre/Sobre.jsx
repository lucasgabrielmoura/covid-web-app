import React from "react";
import Header from "../Header/Header";
import Global from "../globalstyle"
import ContSobre from "./style";
import logorouter from './../../img/logorouter.svg'

export default function Sobre(){
    return(
        <>
            <Global/>
            <Header/>
            <ContSobre>
                <section>
                    <img className="prof" src="https://avatars.githubusercontent.com/u/84140511?v=4" alt="dev-profile" />
                    <h4>Projeto criado por Lucas Gabriel, Dev Front-End, cursando Análise e Desenvolvimento
                         de Sistemas. 
                    </h4>
                    <h3>Tecnologias</h3>
                    <div>
                        <img className="tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react"/>
                        <img className="tec" src="https://cdn.codecarrot.net/images/1_QvSrt0RgwuOKYlLHLjkDQw.png" alt="styled-components"/>
                        <img className="tec" src={logorouter} alt="react-router"/>
                        <img className="tec" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma"/>
                    </div>
                    <a href="https://www.linkedin.com/in/lucas-gabriel-baa800212/" target="_blank" rel="noreferrer">
                        <button>SAIBA MAIS</button>
                    </a>
                </section>
            </ContSobre>
        </>        
    )
};