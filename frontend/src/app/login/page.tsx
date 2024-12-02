'use client'
import NavBar from "@/nav-bar";
import { Button } from "@/components/ui/button"; // Adjust the import path as necessary
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const LoginPage = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Add your login logic here
        console.log("Logging in with:", { email, password });
    };

    return (
        <div>
            <NavBar />
            <div className="flex flex-col items-center justify-center h-screen">
                <Card className="w-80 p-4">
                    <CardHeader>
                        Login
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-4">
                            <Input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border rounded p-2"
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border rounded p-2"
                            />
                            <Button onClick={handleLogin} className="bg-blue-500 text-white">
                                Login
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;