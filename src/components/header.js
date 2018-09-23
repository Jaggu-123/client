import React, { Component } from "react";

class Header extends Component{

    constructor(props){
        super(props);

        this.state = {
            keywords:''
        }
    }

    inputChange(event){
        this.setState({keywords:event.target.value});
        this.props.newsSearch(event.target.value);
    }

    render(){

        /*  inline method of writing css
            const styles{
                header:{

                },
                logo:{

                }
            }
        */

        return(
            <header className="header">
                <div className="logo"
                onClick={()=>console.log('Hey')}>Logo</div>
                <input onChange={this.inputChange.bind(this)}/>
            </header>
        )
    }
}

export default Header;