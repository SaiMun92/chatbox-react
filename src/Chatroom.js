import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message';

class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [{
                username: "Kevin Hsu",
                content: <p>여보세요!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Love it! :heart:</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Check out my Github at https://github.com/SaiMun92</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "KevHs",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "http://i.imgur.com/ARbQZix.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>So</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Korean-ChatBox is going to be an app for you to view videos with friends</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>I want to become a super full stack engineer!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Definitely! Sounds great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
    };

    this.submitMessage = this.submitMessage.bind(this);
  }

  componentDidMount() {
    // fires off after the intial render
    this.scrollToBot();
  }

  componentDidUpdate() {
    // it is invoked immediately after updating occurs, not called during initial render
    // this occurs when there is a new message that updates to the state.
    this.scrollToBot();
  }

  scrollToBot() {
    // ScrollHeight property returns the entire height of an element in pixels
    // scrollTop sets or return the number of pixels an element content is scrolled vertically.
    ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
  }

  submitMessage(e) {
    e.preventDefault();

    this.setState({
      chats: this.state.chats.concat([{
        username: "sai mun",
        content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
        img: "http://i.imgur.com/Tj5DGiO.jpg",
      }])

    }, () => {
      ReactDOM.findDOMNode(this.refs.msg).value = "";
    });
  }

  render() {
    const username="sai mun";
    const { chats } = this.state;

    return (
      <div className="chatroom">
        <h3>Korean-ChatBox</h3>
        <ul className="chats" ref="chats">
          {
            chats.map((chat) =>
              <Message chat={chat} user={username} />
            )
          }
        </ul>

        <form className="input" onSubmit={(e) => this.submitMessage(e)}>
          <input type="text" ref="msg" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Chatroom;
