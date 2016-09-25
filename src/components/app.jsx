import React from "react";
import MessageList from './Message/MessageList.jsx'
import MessageBox from './Message/MessageBox.jsx'
import ChannelList from './Channel/ChannelList.jsx'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import Router from 'react-route';

require('./app.scss');


injectTapEventPlugin();

class App extends React.Component{
    constructor(){
        super();
    }


    render(){

        return(
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                   <div>
                   <AppBar title="My AppBar" />
                    <div id="app-style">
                        <ChannelList/>
                        <MessageList />
                    </div>
                       <MessageBox/>
                    </div>
                </MuiThemeProvider>

        )
    }

}



export default App;