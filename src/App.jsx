import { useGlobalContext } from "./assets/Context";
import Home from "./assets/Home";
import Modal from "./assets/Modal";
import Sidebar from "./assets/Sidebar";


const App = () => {
  const {isModalOpen}=useGlobalContext();
  return(
<>
<Home/>
{isModalOpen&&<Modal/>}
<Sidebar/>
</>)
};
export default App;
