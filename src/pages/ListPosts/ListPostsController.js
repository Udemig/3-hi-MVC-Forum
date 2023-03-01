
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListPostsView from './ListPostsView';

const ListPostsController = () => {
    const [forumData,setForumData] = useState([]);
    const [userData, setUserData] = useState([]);    
    const [showModal,setShowModal] = useState(false)

    const filterUser = (param) => {
      const filtred = forumData.filter(post=> post.user == param);
      setUserData(filtred);
      setShowModal(true)
    };

    useEffect(()=>{
        axios.get('http://localhost:3030/posts')
        .then((res) => setForumData(res.data))
        .catch((err) => console.log(err) )
    },[])


  return (
    <ListPostsView
      filterUser={filterUser}
      forumData={forumData}
      showModal={showModal}
      setShowModal={setShowModal}
      userData={userData}
    />
  );
}

export default ListPostsController