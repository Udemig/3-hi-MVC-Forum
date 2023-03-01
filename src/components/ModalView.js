import React from 'react'

const ModalView = ({ showModal, setShowModal, userData }) => {
  console.log(userData)
  return (
    <>
      {showModal && (
        <div className="modal">
          <h1>
            <span>{userData[0].user}</span> Kullanıcısının attığı postlar
          </h1>
          <button onClick={() => setShowModal(false)}> Kapat </button>
          {userData.map(post=>(
            <div className='post'>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ModalView