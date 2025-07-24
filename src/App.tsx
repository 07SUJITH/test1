import "./App.css";

import DesktopNavigation from "./DesktopView/Navigation/navigation";
import useWindowDimensions from "./helpers/WindowDimensions";
import MobileNavigation from "./MobileView/Navigation/navigation";

export default function App() {
  const { width, height } = useWindowDimensions();

  return (
    <div>{width > height ? <DesktopNavigation /> : <MobileNavigation />}</div>
  );
}
