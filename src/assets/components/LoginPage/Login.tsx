
import './Login.css';

function Login() {
    return (
        <div className='bg-container m-0'>
            <div ></div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>CRAFT HOUSE</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <div className="login-container">
                    <form action="" className="form">
                        <h1>LOGIN</h1>
                        <input type="email" name="email" className="box" placeholder="Enter Username" />
                        <input type="password" name="password" className="box" placeholder="Enter Password" />
                        <input type="submit" value="LOGIN" />
                    </form>
                </div>
            </body>
        </div>
    );
}

export default Login;
