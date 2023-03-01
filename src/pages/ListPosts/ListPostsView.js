import React from 'react'
import HeaderView from '../../components/HeaderView';
import ModalView from '../../components/ModalView';

const ListPostsView = ({
  forumData,
  filterUser,
  showModal,
  setShowModal,
  userData,
}) => {
  return (
    <>
      <HeaderView />
      <div className="container">
        {forumData.map((post) => (
          <div className="post" key={post.id}>
            <div className="post-info">
              <h1>{post.title}</h1>
              <p onClick={(e) => filterUser(post.user)}>{post.user}</p>
            </div>
            <p className="post-text">{post.text}</p>
          </div>
        ))}
      </div>
      <ModalView
        userData={userData}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default ListPostsView