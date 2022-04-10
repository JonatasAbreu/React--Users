import React from "react";
import { ContainerIntes as Container } from "./styles";


function ContainerIntes({children,isBlur}) {
    
    return <Container isBlur={isBlur}>{children}</Container>
}

export default ContainerIntes