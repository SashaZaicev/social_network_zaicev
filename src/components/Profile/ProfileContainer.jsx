import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profilePageReducer";


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         profile={this.props.profilePage}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
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
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
});

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mstp, {getUserProfile})(WithUrlDataContainerComponent);
export default compose(connect(mstp,
    {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
