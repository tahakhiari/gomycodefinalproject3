import React, { useEffect } from 'react'
import video2 from '../Assets/pexels-nikita-ryumshin-7874813.mp4'
import { Link } from 'react-router-dom';
import Showproducts from './products/Showproducts'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../JS/actions/actionUser';
import { get_Albums } from '../JS/actions/actionAlbum'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
const Main = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const uLogin = useSelector(state => state.userLogin)
  const { user } = uLogin
  const aListe = useSelector(state => state.Albums)
  const { Albums } = aListe
  useEffect(() => {
    if (user == null && localStorage.getItem('adminuser') == null) {

      navigate('/signin')
    }
    dispatch(get_Albums())
  }, [dispatch])
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/signin')
  }
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-light shadow-lg p-3 mb-5 bg-body rounded">
          <div class="container-fluid ">

            <a class="navbar-brand" style={{ color: "orange" }} href="#">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse position-absolute top-0 end-0 p-3" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a className='btn btn-danger' onClick={logoutHandler} >Logout</a>
                </li>


              </ul>
            </div>

          </div>
        </nav>
      </header>
      <div>
        <Showproducts albums={Albums} dispatch={dispatch}/>
      </div>



    </div>
  )
}

export default Main