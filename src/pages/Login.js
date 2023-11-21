import { React } from 'react';
import signInPic from '../Assets/sign-in-pic.png';
import { useNavigate, Link } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', position: 'fixed'}}>
            <div style={{ flex: 2, padding: '20px', backgroundColor: 'lightblue' }}>
                <img className="mb-4" src={signInPic} style={{ width: '100%', "max-height": '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ flex: 1, padding: '10px', backgroundColor: 'white' }}>
                <main className="form-signin m-auto">

                    <form style={{ width: '300px', margin: '50px' }} method='post'>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                
                        <div className="form-floating" style={{ margin: '2rem 0rem 1rem 0rem' }}>
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating" style={{ margin: '0rem 0rem 1rem 0rem' }}>
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit" style={{ backgroundColor: '#FC721D' }} onClick={() => navigate('/home')}>Sign in</button>

                        <div style = {{display:'flex', flexDirection:'row'}}>
                            <h6 style={{ margin: '2rem 1rem 0rem 0rem' }}>Don't have an account ?</h6>
                            <Link to='/signup' style={{ color: '#FC721D', 'font-weight': 'bold', display:'flex', flexDirection:'column-reverse'}}>Register here!</Link>
                        </div>

                        <p className="mt-5 mb-3 text-body-secondary">&copy; Nation With NaMo 2023</p>
                    </form>
                </main>
            </div>
        </div>
    )
}

export default Login;