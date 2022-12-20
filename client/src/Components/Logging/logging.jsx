import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./logging.module.css"

const Logging = () => {
	const { loginWithRedirect } = useAuth0();

	return <button className={style.btnland} onClick={() => loginWithRedirect()}>Logging</button>;
};

export default Logging