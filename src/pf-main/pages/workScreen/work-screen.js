import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";

function WorkScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  return isDesktop ? <div>WorkScreen</div> : <div>WorkScreen Mobile</div>;
}
export default WorkScreen;
