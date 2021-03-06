import React, { Component } from 'react';
import Header from './Component/Header';
import Headline from './Component/Headline';
import SharedButton from './Component/Button';
import ListItem from './Component/ListItem';
import { connect } from 'react-redux';
import { fetchPost } from './actions/index';
import './app.scss';
 
const tempArr = [{
  fName: 'Mounika',
  lName: 'Reddy',
  email: 'mouni123@gmail.com',
  age: 26,
  onlineStatus : true
}];

const initialState = {
  hideBtn : false
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPost();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const {hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsValue(number) {
    return number + 1;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;

    const configButton = {
      buttonText : 'Get Posts',
      emitEvent : this.fetch
    }

    return (
      <div className="App" data-test = "appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to render posts!" />
          {!hideBtn &&
            <SharedButton {...configButton}/>
          }
          {posts.length > 0 &&
          <div>
            { posts.map((post,index) => {
              const { title,body } = post;
              const configListItem = {
                title,
                desc: body
              };
              return (
                <ListItem key = {index} {...configListItem}/>
              )
            })}
            </div>}
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts : state.posts
  }
}

export default connect(mapStateToProps,{fetchPost})(App);
