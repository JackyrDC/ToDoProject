export const Register = () => {

    return (
        <div className="">
            <h2>Create an account</h2>

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
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    )
}