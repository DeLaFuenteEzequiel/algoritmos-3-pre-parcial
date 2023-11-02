import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login.jsx";
import { useEffect, useState } from "react";

import BaseLayout from './Layouts/BaseLayout.jsx';

import Users from "./Pages/Users.jsx";
import CreateUser from './Pages/CreateUser.jsx';

const App = () => {

  const [availableRoutes, setvAilableRoutes] = useState([]);
  const [isLoged, setIsLoged] = useState(false); //booleano


  
  useEffect(() => {
    if(localStorage.getItem('jwt')){
      setvAilableRoutes(  //array de rutas que es guardado en el hook 
        [
          {
            path:'/users',
            element: <BaseLayout children={<Users />}/>
          },
          {
            path:'/createUser',
            element: <BaseLayout children={<CreateUser />}/>
          }
        ]
      );
    }
    
  }, [isLoged]); //trigger(disparador) 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Login setIsLoged={setIsLoged} />} />
        {
          availableRoutes.map((item, index) => {
            return(
              <Route path={item.path} element={item.element} key={index}/>
            );
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App



