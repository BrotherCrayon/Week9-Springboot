import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class FooterComponent extends Component {

constructor(){
    super();
}
    
render() {
    return (
        <div>
        <footer className="page-footer">

        <div className="footer-copyright text-center py-3">© 2021 Chad Thunder Enterprise
        </div>

        </footer>
        </div>
    )
}
}

export default FooterComponent;