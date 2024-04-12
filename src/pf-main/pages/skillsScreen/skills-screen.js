import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";

function SkillsScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  return isDesktop ? <div>Skills Page</div> : <div>Skills Page Mobile</div>;
}
export default SkillsScreen;
