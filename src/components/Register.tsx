import { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import signIn1 from "@/firebase/authWithEmail";
import singIn2 from "@/firebase/authWithGoogle";
import { Button } from "./ui/button";


export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        signIn1(email, password);
    };

    return (
        <div className="flex flex-col items-center">
            <Card className="container w-1/3 h-1/3 content-center">
                <CardHeader>
                    <CardTitle>LOGIN</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="my-3">
                            <label className="mr-2">Email</label>
                            <input
                                className="ml-7"
                                id="emailInput"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div className="my-3 mt-6">
                            <label className="mr-2" id="passInput">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <Button variant="outline" onClick={handleSubmit}>Login</Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <hr />
                    <p className="text-center">or</p>
                    <hr />
                    <Button variant="outline" onClick={() => singIn2()}>LogIn with Google</Button>
                </CardFooter>
            </Card>
        </div>
    );
}