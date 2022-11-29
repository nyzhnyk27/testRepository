import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar"
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])


  // імітація запиту на сервер тривалістю 1 секунда
  // useEffect(() => {
  //   setTimeout(() => {
  //     check().then(data => {
  //         user.setUser(true)
  //         user.setIsAuth(true)
  //     }).finally(() => setLoading(false))
  //   }, 1000)
  // }, [])
   

  if (loading) {
    return <Spinner animation={"grow"} style={{position:"fixed", top:"50%", left:"50%"}}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
})

export default App
