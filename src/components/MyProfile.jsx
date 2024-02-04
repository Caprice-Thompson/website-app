const user = {
    name: 'Profile Name',
    image: '/imageProfile.jpg',
    imageSize: 90,
  };
  
  export default function MyProfile() {
    return (
      <>
      <div className="container">
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.image}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize
          }}
        />
        </div>
      </>
    );
  }