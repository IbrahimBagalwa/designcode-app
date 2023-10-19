import { Provider } from "react-redux";
import HomeScreen from "./screens/Home";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
