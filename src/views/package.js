import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import PackageS1 from "../components/package-s1";
import PackageS2 from "../components/package-s2";
import PackageS3 from "../components/package-s3";
import PackageS4 from "../components/package-s4";


class Package extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <PackageS1/>
                <PackageS2/>
                <PackageS3/>
                <PackageS4/>
            </Container>    
        );
    }
}

export default Package;