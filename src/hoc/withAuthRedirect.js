import React from 'react';
import {Redirect} from "react-router";
import {connect} from "react-redux";

const mstpForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>
        }
    }

    let ConectedAuthRedirectComponent = connect (mstpForRedirect)(RedirectComponent);
    return ConectedAuthRedirectComponent;
};
