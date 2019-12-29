import React, { useEffect } from "react";

import { compose } from "redux";
import { connect } from "react-redux";

import { requestData } from "../actions/data";

import Gallery from "../components/Gallery";
import Header from "../components/Header";

const App = ({ title, subtitle, icons, requestData }) => {
  useEffect(() => {
    requestData();
  }, [requestData]);

  return (
    <>
      <Gallery />

      <Header title={title} subtitle={subtitle} icons={icons} />
    </>
  );
};

export default compose(
  connect(
    state => ({
      title: state.header.title,
      subtitle: state.header.subtitle,
      icons: state.header.icons
    }),
    {
      requestData
    }
  )
)(App);
