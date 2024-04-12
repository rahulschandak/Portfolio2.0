import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";

function EducationScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  return isDesktop ? <div>Education Page</div> : <div>Education Page Mobile</div>;
}
export default EducationScreen;
