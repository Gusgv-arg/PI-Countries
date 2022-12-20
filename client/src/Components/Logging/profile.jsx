import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./profile.module.css"

const Profile = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) return <div>Loading...</div>;

	return (
		isAuthenticated && (
			<div className={style.cont}>
				<img className={style.img} src={user.picture} alt={user.name} />
				<h2 className={style.text}>{user.name}</h2>
				{/* <p className={style.text}>{user.email}</p> */}
			</div>
		)
	);
};

export default Profile;
