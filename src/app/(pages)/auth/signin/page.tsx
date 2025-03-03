"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/dashboard"); // Redirect to a protected page after successful sign-in
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-lg mx-auto mt-30">
      <h1 className="text-2xl font-bold">Sign In</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>Email</label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <Button type="submit">Sign In</Button>
      </form>
      <div>
        Dont have an account?{" "}
        <Link className="text-blue-500" href={"/auth/signup"}>
          Register here
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
