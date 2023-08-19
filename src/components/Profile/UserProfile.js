import { message, Skeleton } from "antd";
import { useEffect, useState } from "react";
import userApi from "../../api/userApi";
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userEdit, setUserEdit] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await userApi.get("2");
        setUser(response.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  }, [userEdit]);
  useEffect(() => {
    (async () => {
      try {
        console.log("call api ", userEdit)
        const response = await userApi.update(userEdit);
        if(response){
          message.success("update success")
        }
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    })();
  }, [userEdit])

  // nếu bạn muốn tìm kiếm thì hãy gọi hàm này để thay đổi fillter
  const changeUser = (newFilters) => {
    setLoading(true);
    setUserEdit(newFilters);
  };
  if(!!loading){
    return <Skeleton avatar /> 
  }
  return (
    <section className={classes.profile}>
      <div className={classes.add_backgound_image}>
        <h1>Your Profile</h1>
      </div>
      <div className="container-small">
        <div className="row ">
          <div className="col-md-7">
            <ProfileInfo  user={user}/>
          </div>
          <div className="col-md-5">
            <ProfileForm user={user} setUserEdit={changeUser}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
