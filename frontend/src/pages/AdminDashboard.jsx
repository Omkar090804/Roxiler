import React, { useEffect, useState } from 'react';
import api, { setToken } from '../api';
export default function AdminDashboard(){
  useEffect(()=>{ const t = localStorage.getItem('token'); if (t) setToken(t); },[]);
  const [stats,setStats]=useState(null);
  useEffect(()=>{ api.get('/admin/dashboard').then(r=>setStats(r.data)).catch(()=>{}); },[]);
  return (<div><h2>Admin Dashboard</h2>
    {stats ? <div>
      <div>Total users: {stats.totalUsers}</div>
      <div>Total stores: {stats.totalStores}</div>
      <div>Total ratings: {stats.totalRatings}</div>
    </div> : <div>Login as admin to view stats</div>}
  </div>);
}
