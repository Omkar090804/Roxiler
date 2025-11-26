import React, { useState } from 'react';
import api, { setToken } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    const r = await api.post('/auth/login',{ email, password });
    const { token, user } = r.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    setToken(token);
    if (user.role === 'admin') nav('/admin');
    else if (user.role === 'owner') nav('/owner');
    else nav('/');
  }
  return (<form onSubmit={submit}><h2>Login</h2>
    <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /></div>
    <div><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" /></div>
    <button>Login</button>
  </form>);
}
