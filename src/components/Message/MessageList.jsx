import React from 'react';
import Message  from './Message.jsx';
import _ from 'lodash';
import {Card} from 'material-ui/Card';
import {List} from 'material-ui/List';
import Firebase from 'firebase';

require('./MessageList.scss');


class MessageList extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            massages:[]
    };


        this.style ={
            card:{
                flexGrow: 2
            }
        };


        this.ref =  new Firebase("https://testapp-79b76.firebaseio.com/messages");

        this.ref.once("value", (snapshot)=> {

                var messages = snapshot.val();

            this.setState({
                messages: messages
            });

            }, function (errorObject) {
                console.log("The read failed: " + errorObject.code);
            });


            debugger;
    }





    render(){

      var messageNodes = this.state.massages.map(function(message,i){
          return(
              <Message key={i} message={message.message}/>
          )
      });

        return(
                <Card style={this.style.card}>
                    <List>
                        {messageNodes}
                    </List>
                </Card>
        )


    }

}

export default MessageList;