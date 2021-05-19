import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return (
      <div className="list-group">
        {this.props.posts.map((post, index) => {
          return (
            <div key={index} className="list-group-item list-group-item-action">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader key={index} userId={post.userId} />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
