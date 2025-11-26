import React, { useEffect, useState } from 'react';
import api, { setToken } from '../api';
export default function OwnerDashboard(){
  const [data,setData]=useState(null);
  useEffect(()=>{ const t=localStorage.getItem('token'); if (t) setToken(t); },[]);
  async function load(){
    // for demo: uses storeId = 1
    try {
      const r = await api.get('/stores/owner/1/dashboard');
      setData(r.data);
    } catch (err) { console.error(err); alert('Owner only'); }
  }
  return (<div><h2>Owner Dashboard</h2>
    <button onClick={load}>Load my store data (storeId=1)</button>
    {data && <div>
      <div>Average: {data.average}</div>
      <ul>{data.raters.map(u=>(<li key={u.id}>{u.name} ({u.email}) - {u.score}</li>))}</ul>
    </div>}
  </div>);
}
