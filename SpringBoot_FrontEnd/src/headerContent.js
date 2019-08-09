import React,{Component} from 'react';

class HeaderComponent extends Component {

constructor(){
    super();
}
    
render() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm sticky-top">
                <div className="container-fluid">
                <div className="titleHeader">
                    Jake's First Springboot
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"	name="button">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <button className="btn btn-lg btn-outline-secondary navBtn" type="button" >Home</button>
                </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}
}

export default HeaderComponent;