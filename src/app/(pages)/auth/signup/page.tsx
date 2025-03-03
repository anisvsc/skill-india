"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 201) {
      router.push("/auth/signin");
    } else {
      setError(data.error || "Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col gap-4 max-w-lg mx-auto mt-30">
      <h1 className="text-2xl font-bold">Sign Up</h1>
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
        <Button className="cursor-pointer" type="submit">
          Sign Up
        </Button>
      </form>
      <div>
        Already have an account?{" "}
        <Link className="text-blue-500" href={"/auth/signin"}>
          SignIn here
        </Link>
      </div>
    </div>
  );
};

export default Signup;
