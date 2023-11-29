export const Login = () => {

    return (
        <div className="my-4 mx-6 ">
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

                <div className="">
                    <button type="submit">Log In</button>
                    <button type="button"> Google </button>
                </div>
            </form>
        </div>
    )
}