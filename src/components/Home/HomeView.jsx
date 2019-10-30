import _ from 'lodash/fp';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.css';
import './HomeView.scss';
import SectionHeader from "../SectionHeader";

class HomeView extends React.Component {

    render() {
        return (
          <div className="page-content">
              <SectionHeader heading="News"/>
          </div>
        );
    }

}



export default HomeView;
