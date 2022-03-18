import React, { useEffect, useState } from "react";
import Global from "../globalstyle";
import Container from './style';
import api from '../../service/covidapi';
import Header from "../Header/Header";

export default function Home() {

    const [dadosOpt, setDadosOpt] = useState([]);
    const [dados, setDados] = useState([]);
    const [estados, setEstados] = useState('Todos');
    let estadosList = [];
    const [estadosListPrinci, setEstadosListPrinci] = useState(estadosList);

    

    useEffect(() => {
        api
            .get('')
            .then(res => {
                setDados(res.data.data)
            })
            .catch(err => console.log("Houve algum erro no api 1"))
    }, []);


    useEffect(() => {
        api
            .get('')
            .then(res => {
                setDadosOpt(res.data.data)
            })
            .catch(err => console.log("Houve algum erro no api 2"))
    }, []);

    const ufLista = dadosOpt.map(dado => {
        return (<option key={dado.uid}>{dado.uf}</option>)
    })
    
    

    function checarValor() {
        let valor = document.getElementById("sele").value;
        setEstados(valor);
        if(valor === 'Todos'){
            for(let cont = 0; cont <= dadosOpt.length; cont++){
                estadosListPrinci.pop(estadosListPrinci[cont])
            }
        }else{
            setEstadosListPrinci(estadosList => [...estadosList, valor])
            document.getElementById("filt-date").setAttribute("class", "filt-date-a")
        }
    }

    function hasDuplicates() {
        return (new Set(estadosListPrinci)).size !== estadosListPrinci.length;
    }

    if(hasDuplicates(estadosListPrinci) === true || estadosListPrinci.length > 10){
        estadosListPrinci.pop(estadosListPrinci[estadosListPrinci.length - 1])
    }

    const cidadesLista = dados.map(dado => {
        let validadores = dado.uf === estadosListPrinci[0]||dado.uf === estadosListPrinci[1]||dado.uf === estadosListPrinci[2]||dado.uf === estadosListPrinci[3]||dado.uf === estadosListPrinci[4]||dado.uf === estadosListPrinci[5]||dado.uf === estadosListPrinci[6]||dado.uf === estadosListPrinci[7]||dado.uf === estadosListPrinci[8]||dado.uf === estadosListPrinci[9];
        if( validadores || estados === 'Todos' ){
            return (
                    <tr key={dado.uid}>
                        <td>{dado.state}</td>
                        <td>{dado.cases}</td>
                        <td>{dado.deaths}</td>
                        <td>{dado.suspects}</td>
                        <td>{dado.refuses}</td>
                    </tr>
                );
        }else{
            return ""
        }
    })


    const filterLista = estadosListPrinci.map(dado => (
        (<p className="filt-date" key={dado}>{dado}</p>)
    ))

    useEffect(() => {
        let cxlista = document.getElementById("cx-list");
        if(estadosListPrinci.length === 0 || estados === 'Todos'){
            cxlista.setAttribute("class","cx-list-d");
        }else{
            cxlista.setAttribute("class","cx-list-a");
        }
    })
    

    return (
        <>
            <Global />
            <Container>
                <Header />
                <article>
                    <div className="guide">
                        <h1>Selecione os estados para visualizar os números do Covid atualizados diariamente.</h1>
                    </div>
                    <div className="cxselect">
                        <select onChange={checarValor} id="sele">
                            <option>Todos</option>
                            {ufLista}
                        </select>
                    </div>
                    <div id="cx-list" className="cx-list-a">
                        <h1>Filtro de Estados</h1>
                        <div>
                            {filterLista}
                        </div>
                    </div>
                </article>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>ESTADO</th>
                                <th>CASOS</th>
                                <th>MORTES</th>
                                <th>SUSPEITOS</th>
                                <th>CASOS FALSOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cidadesLista}
                        </tbody>
                    </table>
                </section>
                <footer>
                    <p>Direitos reservados a <a href="https://www.linkedin.com/in/lucas-gabriel-baa800212/" target="_blank" rel="noreferrer">Lucas Gabriel</a></p>
                </footer>
            </Container>
        </>
    )
}