import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';



 
let resultado = [];
/**************************************************************************************************************/
const axios = require('axios').default;

/*******************************************************/
const instanceLogin = axios.create({
    baseURL: 'https://gdp-api-eu.telemedcare.com/',
    timeout: 5000,
   
 })
/*****************************************************/
const instanceAPI = axios.create({
    baseURL: 'https://gdp-api-eu.telemedcare.com/',
    
  });
/********************************************************/



export default class AnalyticsDashboard1 extends Component {
    constructor() {
        super();

        instanceLogin.post('doLogin', {
            "username": "josecarlos.sanguino",
            "password": "Sanguino@2021"
          })
          .then(function (response) {
              localStorage.setItem('token',response.data.item.userLogged.token);
              localStorage.setItem('groupId',response.data.item.userLogged.groupId);
              localStorage.setItem('userId',response.data.item.userLogged.id);
            //console.log(response.data.item.userLogged);
            /**************************************************************************/
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    token: localStorage.getItem('token')
                }
              };
            
            instanceAPI.get('patients?filter=&init=0&size=10', axiosConfig)
              .then(function (response) {
                  
                
                  resultado = response.data.item.items; 
                 
                //console.log(response.data.item.items);
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            /***********************************************************************/
          })
          .catch(function (error) {
            console.log(error);
          });
        
        /**************************************************************************************************************/

    }


    render() {

        return (
            <Fragment>
                
                    <div>
                        <PageTitle
                            heading="Primera prueba"
                            subheading="Esto es un ejemplo llamada API Pacientes"
                            icon="pe-7s-car icon-gradient bg-mean-fruit"
                        />
                      
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="card-header">Active Users
                                        <div className="btn-actions-pane-right">
                                            <div role="group" className="btn-group-sm btn-group">
                                                <button className="active btn btn-info">Last Week</button>
                                                <button className="btn btn-info">All Month</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th className="text-center">Complete name</th>
                                                <th>Phone</th>
                                                <th className="text-center">Access</th>
                                                <th className="text-center">Group</th>
                                                <th className="text-center">Actions</th>
                                                <th className="text-center">Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                
                                            <tr>
                                                <td className="text-center text-muted">Prueba</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">John Doe</div>
                                                                <div className="widget-subheading opacity-7">Web Developer</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">Madrid</td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-primary btn-sm">Details</button>
                                                </td>
                                                <td></td>
                                            </tr>
                                                       
                                            </tbody>
                            }
                                        </table>
                                    </div>
                                    
                                </Card>
                            </Col>
                        </Row>
                        
                    </div>
                
            </Fragment>
        )
    }
}
