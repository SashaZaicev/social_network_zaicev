import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profilePageReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profilePage}
                        status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>)
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// const mstpForRedirect = (state) => ({
//     isAuth: state.auth.isAuth,
// })
// AuthRedirectComponent = connect (mstpForRedirect)(AuthRedirectComponent)

const mstp = (state) => ({
    profilePage: state.profilePage.profile,
    status: state.profilePage.status
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mstp, {getUserProfile})(WithUrlDataContainerComponent);
export default compose(connect(mstp,
    {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
