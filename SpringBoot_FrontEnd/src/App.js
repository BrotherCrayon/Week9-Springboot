import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './headerContent.js';
import FooterComponent from './footerContent.js';
import Dashboard from './newUser.js';
// import TableComponent from './tableContent.js';
import DataService from './DataService.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      records: [], id:0
    }
    this.updateUser = this.updateUser.bind(this);
    this.lit = this.lit.bind(this)
  }

  lit(userid) {
    this.setState({
       id:userid
    })
}

  createUser() {
    const Account = document.getElementsByClassName("input");
    let UserData = {
      "id":"null"
    };

    for (let i = 0; i < Account.length; i++){
      UserData[Account[i].id] = Account[i].value;
    }

    let promise = DataService.saverecord(UserData);

    promise.then(response => {
    })
  }

  updateUser() {
    const Account = document.getElementsByClassName("inputUpdate");
    let UserData = {
      "id":"null"
    };
    for (let i = 0; i < Account.length; i++){
      UserData[Account[i].id] = Account[i].value;
    }
    let promise = DataService.updateUser(this.state.id, UserData);

    promise.then(response => {
    })
  }

  render() {
    let promise = DataService.retrieveShowAllRecords();
    promise.then(response => {
      this.setState({ records: response.data })
    }).catch(error => { console.warn(error) })

    return (
      <>
        <HeaderComponent />
        <div>
          <div className="jumbotron">
            <h1 className="display-4">Welcome to my 🔥🔥💯 page</h1>
            <p className="lead">This is where dreams are made, empires fall and all life exists. This is Jake's first SpringBoot and react project. God speed.</p>
            <hr className="my-4"></hr>
            <p className="lead">
            </p>
          </div>

          <table className="table table-striped userTable">
            <thead>
              <tr>
                <th scope="col"> Id </th>
                <th scope="col"> Username </th>
                <th scope="col"> City</th>
                <th scope="col"> Options</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.records.map((r, i) => {
                  return (
                    <tr key={"A" + i}>
                      <td>{r.id}</td>
                      <td>{r.username}</td>
                      <td>{r.city}</td>
                      <td>
                      <button type="button" className="btn btn-dark" onClick={(e) =>  {this.lit(r.id)} } data-toggle="modal" data-target="#exampleModal">
                      Update</button>
                        <button className="btn btn-danger" onClick={(e) => { DataService.deleteRecord(r.id) }}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

          <div className="card mx-auto">
              <h4>Enter a new account:</h4>
            <form>
              <div className="form-row">
                <div className="col">
                  <h6>User name:</h6>
                  <input id="username" type="text" className="form-control input" placeholder="First name"/>
                </div>
              </div>
              <div className="form-row">
                <div className="col">
                  <br></br>
                  <h6>City:</h6>
                  <input id="city" type="text" className="form-control input" placeholder="City"/>
                </div>
              </div>
              <br></br>
              <button type="button" className="btn btn-dark" onClick={this.createUser}>Create happy times</button>
            </form>
          </div>

              

              <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="form-row">
                          <div className="col">
                            <h6>User name:</h6>
                            <input id="username" type="text" className="form-control inputUpdate" placeholder="First name"/>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col">
                            <br></br>
                            <h6>City:</h6>
                            <input id="city" type="text" className="form-control inputUpdate" placeholder="City"/>
                          </div>
                        </div>
                        <br></br>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-sm btn-dark" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-dark" onClick={this.updateUser}>Save changes</button>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
            <FooterComponent />
          </>
          );
        }
      }
      
      export default App;
