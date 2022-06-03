import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import LoggedInBanner from '../../Layout/Banner/LoggedInBanner.jsx';
import { LoggedInNavigation } from '../../Layout/LoggedInNavigation.jsx';
import { JobSummaryCard } from './JobSummaryCard.jsx';
import { BodyWrapper, loaderData } from '../../Layout/BodyWrapper.jsx';
import { Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, CardGroup, Card } from 'semantic-ui-react';

export default class ManageJob extends React.Component {
    constructor(props) {
        super(props);
        let loader = loaderData
        loader.allowedUsers.push("Employer");
        loader.allowedUsers.push("Recruiter");
        //console.log(loader)
        this.state = {
            loadJobs: [],
            loaderData: loader,
            activePage: 1,
            sortBy: {
                date: "desc"    
            },
            filter: {
                showActive: true,
                showClosed: false,
                showDraft: true,
                showExpired: true,
                showUnexpired: true
            },
            totalPages: 1,
            activeIndex: ""
        }
        this.loadData = this.loadData.bind(this);
        this.init = this.init.bind(this);
        this.loadNewData = this.loadNewData.bind(this);
        //your functions go here
    };

    init() {
        let loaderData = TalentUtil.deepCopy(this.state.loaderData)
        loaderData.isLoading = false;
        this.setState({ loaderData });//comment this

        //set loaderData.isLoading to false after getting data
        this.loadData(() =>
           this.setState({ loaderData })
        )
        
        console.log(this.state.loaderData)
    }

    componentDidMount() {
        this.init();
    };

    loadData(callback) {
        var link = 'http://localhost:51689/listing/listing/getEmployerJobs';
        var cookies = Cookies.get('talentAuthToken');
       //console.log(link);


       // your ajax call and other logic goes here
       
            $.ajax({
                url: link,
                headers: {
                    'Authorization': 'Bearer ' + cookies,
                    'Content-Type': 'application/json'
                },
                type: "GET",
                contentType: "application/json",
                dataType: "json",
                success: function (res) {
                    if (res.success == true) {
                        //res.jobData.jobDetails.startDate = moment(res.jobData.jobDetails.startDate);
                        //res.jobData.jobDetails.endDate = res.jobData.jobDetails.endDate ? moment(res.jobData.jobDetails.endDate) : null;
                        //res.jobData.expiryDate = res.jobData.expiryDate
                        //    ? moment(res.jobData.expiryDate) > moment()
                        //        ? moment(res.jobData.expiryDate) : moment().add(14, 'days') : null;
                        //this.setState({ jobData: res.jobData })

                      
                        this.setState({
                            loadJobs: res.myJobs
                        })
                        
                        console.log("rececnt jobs", this.state.loadJobs);
                    } else {
                        //TalentUtil.notification.show(res.message, "error", null, null)
                        console.log("error");
                    }
                }.bind(this)
            })
        
    }

    loadNewData(data) {
        var loader = this.state.loaderData;
        loader.isLoading = true;
        data[loaderData] = loader;
        this.setState(data, () => {
            this.loadData(() => {
                loader.isLoading = false;
                this.setState({
                    loadData: loader
                })
            })
        });
    }

    render() {
        return (
            

            <BodyWrapper reload={this.init} loaderData={this.state.loaderData}>
                <div className="ui container">
                    <h2>List of Jobs</h2>
                                 

                   
                    <div style={{ 'display': 'flex' }, { 'flexDirection': 'row' }}>
                        <Card.Group itemsPerRow={3}>
                       
                        {(this.state.loadJobs.map((job) => (
                           
                            <JobSummaryCard
                            key={job.id}
                            title={job.title}
                            summary={job.summary}
                            location={job.location}
                        />
                            
                        )))}
                        </Card.Group>
                     
                        </div>
                    
                

                </div>
                </BodyWrapper>
                
        )
    }
}