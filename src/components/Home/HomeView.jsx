import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions/index';
import SectionHeader from "../SectionHeader";
import Loader from '../Loader';
import SocialStory from './SocialStory';
import './HomeView.scss';

class HomeView extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const { newsData } = this.props;
        return (
          <div className="page-content">
              <SectionHeader heading="Stories"/>
              <div className="ml-3 mr-3">
              <div className="row stories">
              {
                  newsData &&
                      newsData.filter(news => !!news.data.twitter_extended_entities).map(story =>
                            <SocialStory story={story.data} key={story.data.id}/>
                      )
              }
              </div>
              {
                  !newsData && <Loader/>
              }
              </div>
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
        fetchData: () => dispatch(actions.fetchNews(100))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
