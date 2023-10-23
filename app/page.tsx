"use client";
import Image from "next/image";
import s from "./page.module.scss";
import iconEmail from "./assets/img/Component 17.png";
import iconPassword from "./assets/img/Component 18.png";
import google from "./assets/img/google.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validateLoginAndPassword = () => {
    if (email === "" || password === "") {
      message.error("Incorrect password/login");
      return 0;
    }
    if (email.length > 50 || password.length > 50 || password.length < 8) {
      message.error("Incorrect password/login");
      return 0;
    }
    const pattern = /^[a-zA-Z0-9@]+$/;

    if (!pattern.test(email)) {
      message.error("Incorrect login");
      return 0;
    }
    router.push("/dashboard");
  };

  return (
    <div className={s.loginForm}>
      <div className={s.welcomeBack}>Welcome Back 👋🏼</div>
      <div className={s.inputArea}>
        <div className={s.container}>
          <input
            className={s.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="text"
          />
          <Image src={iconEmail} className={s.icon} alt="Email" />
        </div>
        <div className={s.container}>
          <input
            className={s.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="text"
          />
          <Image src={iconPassword} className={s.icon} alt="Password" />
        </div>
        <div className={s.forgot}>Forgot your password?</div>
      </div>
      <div className={s.areaButton}>
        <button className={s.login} onClick={validateLoginAndPassword}>
          Login
        </button>
        <div className={s.element}>or</div>
        <button className={s.signIn}>
          <Image className={s.iconGoogle} src={google} alt="" /> Sign in with
          Google
        </button>
      </div>
      <div className={s.register}>
        Don't have an account?
        <span>
          <b> Register</b>
        </span>
      </div>
    </div>
  );
}
