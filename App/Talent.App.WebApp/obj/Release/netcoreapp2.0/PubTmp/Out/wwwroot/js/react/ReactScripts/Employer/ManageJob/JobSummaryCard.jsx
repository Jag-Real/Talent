import React from 'react';
import Cookies from 'js-cookie';
import { GridColumn, GridRow, Popup } from 'semantic-ui-react';
import moment from 'moment';
import { Card, Image, Pagination, Icon, Dropdown, Checkbox, Accordion, Form, Segment, Button } from 'semantic-ui-react';

export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
        this.selectJob = this.selectJob.bind(this)
    }

    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
       // url: 'http://localhost:51689/listing/listing/closeJob';
    }

    render() {
        return (
           
            /*  <Card.Group itemsPerRow={3}>*/
            
            <Card>
                    <Card.Content>

                        <Card.Header>{this.props.title}</Card.Header>
                        <Card.Meta>{this.props.location.city}, {this.props.location.country}</Card.Meta>
                        <Card.Description>
                            {this.props.summary}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Delete
                            </Button>
                        </div>
                    </Card.Content>
            </Card>
            
                    
            
        )

    }
}

                {/*<Card>*/}
                {/*    <Card.Content>*/}

                {/*        <Card.Header>{this.props.title}</Card.Header>*/}
                {/*        <Card.Meta>{this.props.location.city}, {this.props.location.country}</Card.Meta>*/}
                {/*        <Card.Description>*/}
                {/*            {this.props.summary}*/}
                {/*        </Card.Description>*/}
                {/*    </Card.Content>*/}
                {/*    <Card.Content extra>*/}
                {/*        <div className='ui two buttons'>*/}
                {/*            <Button basic color='green'>*/}
                {/*                Approve*/}
                {/*            </Button>*/}
                {/*            <Button basic color='red'>*/}
                {/*                Delete*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*    </Card.Content>*/}
                {/*</Card>*/}
                {/*<Card>*/}
                {/*    <Card.Content>*/}

                {/*        <Card.Header>{this.props.title}</Card.Header>*/}
                {/*        <Card.Meta>{this.props.location.city}, {this.props.location.country}</Card.Meta>*/}
                {/*        <Card.Description>*/}
                {/*            {this.props.summary}*/}
                {/*        </Card.Description>*/}
                {/*    </Card.Content>*/}
                {/*    <Card.Content extra>*/}
                {/*        <div className='ui two buttons'>*/}
                {/*            <Button basic color='green'>*/}
                {/*                Approve*/}
                {/*            </Button>*/}
                {/*            <Button basic color='red'>*/}
                {/*                Delete*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*    </Card.Content>*/}
                {/*</Card>*/}
            
                

              
                {/*<Card>*/ }

        {/*    <Card.Content>*/ }
        {/*        <Card.Header>{this.props.title}</Card.Header>*/ }
        {/*        <Card.Meta>*/ }
        {/*            <span className='date'>{this.props.location.city}, {this.props.location.country}</span>*/ }
        {/*        </Card.Meta>*/ }
        {/*        <Card.Description>*/ }
        {/*            {this.props.summary}*/ }
        {/*        </Card.Description>*/ }
        {/*    </Card.Content>*/ }
        {/*    <Card.Content extra>*/ }
        {/*        <a>*/ }
        {/*            <Icon name='user' />*/ }
        {/*            Job Lisitings*/ }
        {/*        </a>*/ }
        {/*    </Card.Content>*/ }
        {/*</Card>*/ }
        {/*<h3>{this.props.title}</h3>*/ }
        {/*<p>{this.props.location.city}, {this.props.location.country}</p>*/ }
        {/*<p>{this.props.summary}</p>*/ }
            

