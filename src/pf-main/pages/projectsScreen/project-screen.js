import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";

function ProjectScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  return isDesktop ? ( <div>Projects Screen</div> ) : ( <div>Projects Screen Mobile</div> );
}
export default ProjectScreen;
