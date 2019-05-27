import React, { Component } from 'react';
import PartsListItem from './PartsListItem/PartsListItem';

class PartsList extends Component {
    render() {
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                    <PartsListItem features={this.props.features}/>
                    {/*{ features }*/}
            </section>
        )
    }
}

export default PartsList;