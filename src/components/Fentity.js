import React, { Component } from 'react';
import '../styles/fentity.css'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Fentity extends Component {
    render() {

        const fentitiesCategory = this.props.match.params.fentities
        const name = this.props.match.params.name
        const fentity = this.props.state[fentitiesCategory].find(f => f.name.toLowerCase() === name.toLowerCase())

        console.log(this.props.match)
        return !fentity ? <Redirect to="/" /> : (
            <div id="creature-container">
                <h1>{fentity.name}</h1>
                <img src={fentity.imgUrl} alt="" />
                <div className="title">Power:</div>
                <div className="power text"> {fentity.power}</div>
                <div className="other text">{fentity.other}</div>
                <Link to={`/directory/${fentitiesCategory}`}> <div>Go Back</div></Link>
            </div>
        )
    }
}

export default Fentity;
