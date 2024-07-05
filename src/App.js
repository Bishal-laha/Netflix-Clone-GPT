import {Provider} from "react-redux";
import appStore from "./utils/redux/appStore.js";
import Body from "./components/Body.js";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
