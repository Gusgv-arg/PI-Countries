import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./logout.module.css"

const Logout = () => {
	const { logout } = useAuth0();

	return (
		<button className={style.btnland} onClick={() => logout({ returnTo: window.location.origin })}>
			Logout
		</button>
	);
};

export default Logout;
