import React from "react";
import style from "./message.module.css";

function Message({ message }) {
	return (
		<>
			<span className={style.message}>{message}</span>
		</>
	);
}

export default Message;
