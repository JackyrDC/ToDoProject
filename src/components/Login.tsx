export const Login = () => {

    return (
        <div className="my-4 mx-6 p-3 bg-sky-500 place-items-center">
            <h2>Login</h2>

            <form>
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                />
                <input
                    name="pass"
                    type="password"
                    placeholder="Password"
                />

                <div className="container ">
                    <button type="submit">Log In</button>
                    <button type="button"> Google </button>
                </div>
            </form>
        </div>
    )
}