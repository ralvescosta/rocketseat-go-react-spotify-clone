import React from "react";

//styles
import { Spinner } from "./styles";

//Assets
import loadingIcon from "../../assets/images/loading.svg";

const Loading = () => <Spinner src={loadingIcon} alt="loading" />;

export default Loading;
