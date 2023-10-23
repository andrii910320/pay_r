import Image from "next/image";
import s from "./page.module.scss";
import iconEmail from "./assets/img/Component 17.png";
import iconPassword from "./assets/img/Component 18.png";
import google from "./assets/img/google.png";
import React, { useState, useRef } from 'react';

export default function Login() {



  return (
    <div className={s.loginForm}>
      <div className={s.welcomeBack}>Welcome Back 👋🏼</div>
      <div className={s.inputArea}>
        <div className={s.container}>
          <input className={s.input} placeholder="Email" type="text" />
          <Image src={iconEmail} className={s.icon} alt="Email" />
        </div>
        <div className={s.container}>
          <input className={s.input} placeholder="Password" type="text" />
          <Image src={iconPassword} className={s.icon} alt="Password" />
        </div>
        <div className={s.forgot}>Forgot your password?</div>
      </div>
      <div className={s.areaButton}>
        <button className={s.login}>
          <a href="./dashboard">Login</a>
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
