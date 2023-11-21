import React from 'react'
import signInPic from '../Assets/sign-in-pic.png';

function SignUp() {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', position: 'fixed' }}>
            <div style={{ flex: 2, padding: '20px', backgroundColor: 'lightblue' }}>
                <img className="mb-4" src={signInPic} style={{ width: '100%', "max-height": '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1, padding: '10px', backgroundColor: 'white' }}>
                <main className="form-signin m-auto">
                    <form style={{ width: '300px', margin: '50px' }} method='post'>
                        <h1 className="h3 mb-3 fw-normal">Sign Up Here!</h1>

                        <div className="form-floating" style={{ margin: '3rem 0rem 1rem 0rem' }}>
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating" style={{ margin: '0rem 0rem 1rem 0rem' }}>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating" style={{ margin: '0rem 0rem 1rem 0rem' }}>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Confirm Password</label>
                        </div>
                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit" style={{ backgroundColor: '#FC721D' }}>Sign Up</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; Nation With NaMo 2023</p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default SignUp;
