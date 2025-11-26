import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function Signup(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [address,setAddress]=useState(''); const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function submit(e){
    e.preventDefault();
    await api.post('/auth/signup',{ name, email, address, password });
    alert('Signed up! Please login.');
    nav('/login');
  }
  return (<form onSubmit={submit}><h2>Signup</h2>
    <div><input value={name} onChange={e=>setName(e.target.value)} placeholder="name (20-60 chars)" /></div>
    <div><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" /></div>
    <div><input value={address} onChange={e=>setAddress(e.target.value)} placeholder="address" /></div>
    <div><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="password" /></div>
    <button>Signup</button>
  </form>);
}
