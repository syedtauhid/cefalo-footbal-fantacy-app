import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions/index';
import SectionHeader from "../SectionHeader";
import Loader from '../Loader';
import './HomeView.scss';

class HomeView extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { newsData } = this.props;
        return (
          <div className="page-content">
              <SectionHeader heading="News"/>
              {
                  newsData ?
                      newsData.map(news => <div>hre</div>)
                      :
                      <Loader/>
              }
          </div>
        );
    }

}

HomeView.propTypes = {
    newsData: PropTypes.any,
    fetchData: PropTypes.func
};

const mapStateToProps = state => {
    return {
        newsData: state.premierLeague.news.data,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(actions.fetchNews())
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
