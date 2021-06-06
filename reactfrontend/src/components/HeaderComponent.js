import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar bavbar-expand-md justify-content-center" style={{backgroundColor: "turquoise", fontSize: "25px"}}>
                    <div className="nav-brand"> Student Management Application </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;