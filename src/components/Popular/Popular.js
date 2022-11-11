import React from "react";
import Repos from "./Repos";
import Tabs from "./Tabs";
import Loader from "../Loader";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        loading: state.popularReducer.loading,
    };
} 

class Popular extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Tabs />
                <Loader loading={this.props.loading}/> 
                <Repos />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Popular);