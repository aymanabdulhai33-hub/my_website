import React , {useContext} from "react";
import { BuilderProvider } from "./useBuilderContext";

const useBuilder = () => useContext(BuilderProvider)

export default useBuilder