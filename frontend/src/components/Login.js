import React, { useEffect, useState } from 'react'
import video1 from '../Assets/pexels-nikita-ryumshin-7874813.mp4'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../JS/actions/actionUser'
import { useNavigate } from "react-router-dom";
const Login = ({ history }) => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const uLogin = useSelector(state => state.userLogin)
    const { user } = uLogin

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)
    useEffect(() => {
        if (user?.name != null) {
            navigate('/home')
        }
    }, [])
    const verifylogin = () => {
        dispatch(login({ name: username, password: password, remember: remember }))
        navigate('/home')

    }
    const handleUsernameInputChange = (event) => {
        event.persist();
        setUsername(event.target.value)
    };
    const handlePasswordInputChange = (event) => {
        event.persist();
        setPassword(event.target.value)
    };
    return (

        <div className='loginpage'>
            <div className='videocontainer'>
                {/* <video className='video1' src={video1} autoPlay loop muted height="3500" /> */}
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">

                <div className="border border-primary shadow-lg p-4 mb-10 bg-body rounded">
                    <div className="pb-5 p-2">
                        <h3 className="border-bottom border-success position-absolute start-50 translate-middle">Sign-in </h3>
                    </div>


                    <div className="d-grid gap-2">
                        <Link to='/signup'>
                            <button type="button" className="btn btn-outline-success">create my account</button>
                        </Link>
                    </div>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label ">Username</label>
                            <input type="name" className="form-control rounded-pill border-success" id="username" placeholder="type your full name " value={username} onChange={handleUsernameInputChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label ">password</label>
                            <input type="password" className="form-control rounded-pill border-success" id="password" placeholder="type your password " value={password} onChange={handlePasswordInputChange} />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="remember" checked={remember} onChange={(e) => setRemember(!remember)} />
                            <label className="form-check-label" htmlFor="remember">remember me</label>
                        </div>

                        <div className="d-grid gap-2">

                            <button type="button" className="btn btn-outline-success" onClick={verifylogin}>sign in</button>

                        </div>
                    </form>



                </div>
            </div>
        </div>
    )

}


export default Login