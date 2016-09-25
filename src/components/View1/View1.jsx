import React from 'react';




class View1 extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            text:'New View'

        }
    }

    render(){

        return(
            <div>
                <h1>{this.state.text}</h1>
            </div>
        )

    }




}



export default View1;