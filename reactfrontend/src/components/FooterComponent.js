import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "fixed-bottom" style={{textAlign: "center", backgroundColor: "turquoise"}}>
                    <span className="text-muted">All Rights Reserved 2021 @DhawalDarji</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;