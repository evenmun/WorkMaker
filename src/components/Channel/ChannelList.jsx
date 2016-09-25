import React from 'react'
import Channel from './Channel.jsx'
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';

require('./ChannelList.scss');

class ChannelList extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            channels:[
            'dogs',
            'cast'
            ]
        }
    }




    render(){

        var channelNodes = this.state.channels.map(function(channel, i){
            return (
                <Channel key={i} channel={channel}/>
            )
        });


        return(
            <Card id="channel-list">
                <List>
                {channelNodes}
                </List>
            </Card>
        );
    }
}

export default ChannelList;