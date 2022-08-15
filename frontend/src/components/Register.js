import React, { useState } from 'react'
import video1 from '../Assets/pexels-nikita-ryumshin-7874813.mp4'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../JS/actions/actionUser'
const Register = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(0)
    const [password, setPassword] = useState('')
    const u = useSelector(state => state.userAdd)
    const { user } = u
    const submitHandler = () => {
        dispatch(adduser({ name: name, email: email, phone: phone, password: password }))
        if (user) {
            alert('User has been successfully Added!')
        }
    }
    return (

        <div className='signuppage'>
            <div className='videocontainer'>
                {/* <video className='video1' src={video1} autoPlay loop muted height="3500" /> */}
            </div>
            <div className="position-absolute top-50 start-50 translate-middle">

                <div className="border border-primary shadow-lg p-4 mb-10 bg-body rounded">
                    <div className="pb-5 p-2">
                        <h3 className="border-bottom border-success position-absolute start-50 translate-middle">Sign-up </h3>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label ">Username</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control rounded-pill border-success" id="tel" placeholder="type your Username " />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control rounded-pill border border-success" id="email" aria-describedby="emailHelp" placeholder="type your email adress " />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label ">Phone number</label>
                            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} className="form-control rounded-pill border-success" id="tel" placeholder="type your phone number " />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label ">password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control rounded-pill border-success" id="password" placeholder="type your password " />
                        </div>



                        <div className="d-grid gap-2">
                            <Link to='/signin'>
                                <button type="submit" className="btn btn-outline-success" onClick={submitHandler}>sign up</button>
                            </Link>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}




export default Register