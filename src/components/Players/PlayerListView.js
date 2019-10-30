import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions/index';
import SectionHeader from "../SectionHeader";
import ErrorBoundary from '../ErrorBoundary';
import PlayersList from "./PlayersList";
import Loader from '../Loader';

class PlayerListView extends React.Component {

    state = {
        searchKey:''
    };

    componentDidMount() {
        this.props.fetchPlayersData();
    }

    onSearchPlayers = (key) => {
        this.setState({searchKey: encodeURIComponent(key)})
    };

    render() {
        const { playersData } = this.props;
        const {searchKey} = this.state;

        return (
            <>
                <SectionHeader heading="Players" onSearchChange={this.onSearchPlayers} />
                <ErrorBoundary>
                    {
                        playersData ?
                            <PlayersList search={searchKey} playersData={playersData}/>
                            :
                            <Loader/>
                    }

                </ErrorBoundary>
            </>
        );
    }

}

PlayerListView.propTypes = {
    playersData: PropTypes.any,
    fetchClubPlayersData: PropTypes.func,
    fetchPlayersData: PropTypes.func
};

const mapStateToProps = state => {
    return {
        playersData: state.premierLeague.players.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlayersData: (args ={}) => dispatch(actions.fetchPlayers({
            ...args,
            pageSize:100,
            compSeasons:274,
            altIds:true,
            type:'player',
            id:-1,
            compSeasonId:274
        })),
        fetchClubPlayersData: () => dispatch(actions.fetchClubPlayers())
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(PlayerListView);
