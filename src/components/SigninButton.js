"use client";

import Link from "next/link";



const SigninButton = () => {
  return (
    <div className="flex items-center gap-3">
      {/* <button className="text-lg font font-semibold text-blue-800 " onClick={() => signIn()}>Sign in</button> */}
      <Link href="/api/auth/login" className="text-lg font font-semibold text-blue-800">SignIn</Link>
      <Link href="/api/auth/register" className="text-lg font font-semibold text-blue-800">SignUp</Link>
    </div>
  );
};

export default SigninButton;
