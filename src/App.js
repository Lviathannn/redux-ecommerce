import Pages from "./components/home/pages/Pages";
import "./style/main.scss";
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
   return (
      <>
         <Provider store={store}>
            <Pages />
         </Provider>
      </>
   );
}
export default App;
