import React, { Component } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {BrowserRouter, Route} from 'react-router-dom';
import '../css/estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faTable } from '@fortawesome/free-solid-svg-icons';
import GraficaBarras from '../components/GraficaBarras';
import Treemap from '../components/Treemap';
import ExcelToJson from '../components/ExcelToJson';


class Sidenav extends Component {
    state={
        expanded: false,
        selected: 'font-awesome'
    }
    

    onToggle=expanded=>{
        this.setState({expanded: expanded})
    }

    render() {
        const {expanded}=this.state;
        return (
            <div style={{marginLeft: expanded ? 240: 64}}>
                <BrowserRouter>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
                onToggle={this.onToggle}
            >
            <SideNav.Toggle />
                <SideNav.Nav defaultSelected="exceJson">
                    <NavItem eventKey="exceJson">
                        <NavIcon>
                        <FontAwesomeIcon icon={faTable} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Excel - Json
                        </NavText>
                    </NavItem>                                                 
                    <NavItem eventKey="treemap">
                        <NavIcon>
                        <FontAwesomeIcon icon={faChartBar} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Treemap
                        </NavText>
                    </NavItem>  
                    
                    <NavItem eventKey="grafica-de-barras">
                        <NavIcon>
                        <FontAwesomeIcon icon={faChartBar} className="iconSidenav"/>
                        </NavIcon>
                        <NavText>
                        Gráfica de Barras
                        </NavText>
                    </NavItem> 
                </SideNav.Nav>
            </SideNav>
            <main style={{padding: '30px'}}>            
                <Route path="/grafica-de-barras" exact component={props => <GraficaBarras/>} />
                <Route path="/treemap" exact component={props => <Treemap/>} />    
                <Route path="/exceJson" exact component={props => <ExcelToJson/>} />       
            
            </main>
        </React.Fragment>
    )}
    />
</BrowserRouter>
            </div>
        );
    }
}

export default Sidenav;