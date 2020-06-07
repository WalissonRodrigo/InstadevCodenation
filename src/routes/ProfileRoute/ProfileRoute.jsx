import React, { useState, useEffect } from "react";
import UserProfile from "../../containers/UserProfile";
import UserPosts from "../../containers/UserPosts";
import Loading from "../../components/Loading";
import api from "../../api";

const ProfileRoute = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    avatar: "",
    username: "",
    email: "",
  });
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { pathname } = window.location;
    const param = pathname.split("/")[2];
    api.get.Users(param).then((profileData) => {
      const { id, name, username, avatar, email } = profileData[0];
      setUser({ id, name, username, avatar, email });
    });
  }, []);

  useEffect(() => {
    if (user.id) {
      api.get.Posts(user.id).then((posts) => {
        setUserPosts(posts);
        setIsLoading(false);
      });
    }
  }, [user.id]);

  return (
    <div data-testid="profile-route">
      <UserProfile
        name={user.name}
        avatar={user.avatar}
        username={user.username}
        email={user.email}
      />
      {isLoading ? <Loading /> : <UserPosts posts={userPosts} />}
    </div>
  );
};

export default ProfileRoute;
