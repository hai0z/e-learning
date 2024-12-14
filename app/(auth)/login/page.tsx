"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(email, password);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-8">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-6xl w-full">
        <div className="hidden lg:flex lg:w-1/2 bg-primary text-primary-content p-12 flex-col justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/next.svg"
              alt="Logo"
              width={120}
              height={40}
              className="invert"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Chào mừng trở lại!</h2>
            <p className="text-lg opacity-90">
              Đăng nhập để tiếp tục hành trình của bạn với chúng tôi. Truy cập
              tất cả các tài nguyên và quản lý tài khoản của bạn.
            </p>
          </div>
        </div>

        <div className="card-body lg:w-1/2">
          <div className="lg:hidden flex justify-center mb-8">
            <Image
              src="/next.svg"
              alt="Logo"
              width={180}
              height={60}
              className="dark:invert"
            />
          </div>

          <h2 className="card-title text-3xl mb-8">
            Đăng nhập vào tài khoản của bạn
          </h2>

          <form className="space-y-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email hoặc tên đăng nhập</span>
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Mật khẩu</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text ml-2">Nhớ mật khẩu</span>
              </label>
              <a href="#" className="link link-primary">
                Quên mật khẩu?
              </a>
            </div>

            <button className="btn btn-primary w-full" onClick={handleLogin}>
              Đăng nhập
            </button>
          </form>

          <div className="divider">Hoặc đăng nhập với</div>

          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-outline">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Google</title>
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
              Google
            </button>
            <button className="btn btn-outline">
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path
                  fill="currentColor"
                  d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                />
              </svg>
              Facebook
            </button>
          </div>

          <p className="text-center mt-8">
            Bạn không có tài khoản?{" "}
            <a href="/register" className="link link-primary">
              Tạo tài khoản
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
