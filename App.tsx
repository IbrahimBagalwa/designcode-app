import { Provider } from "react-redux";
import { store } from "./redux/store";
import TabNavigator from "./naviagator/TabNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}
