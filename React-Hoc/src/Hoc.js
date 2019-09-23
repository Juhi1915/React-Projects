import React ,{Component } from "react";

const EnhancedComp = WrapComp =>
{
class Newhandleerror extends Component{
    render()
    {
        return <WrapComp add="!Something went to wrong"/>;

    }
}
return Newhandleerror;
};

export default EnhancedComp;