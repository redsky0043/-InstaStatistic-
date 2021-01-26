import React from 'react';
import { connect } from "react-redux";

import { Header } from './components/Header/Header';
import Content from './components/Content/Content';
import { Footer } from './components/Footer/Footer';

import './styles/_global.scss';
import './styles/_variables.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function mapStateToProps(state: any) {
    return {
        user: state.userNickName.nickName
    }
}

export default connect(mapStateToProps)(App);
