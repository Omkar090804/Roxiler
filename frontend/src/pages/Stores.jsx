import React, { useEffect, useState } from 'react';
import api, { setToken } from '../api';

export default function Stores(){
  const [stores,setStores]=useState([]);
  const [q,setQ]=useState('');
  useEffect(()=>{ api.get('/stores').then(r=>setStores(r.data)); const t = localStorage.getItem('token'); if (t) setToken(t); },[]);
  async function submitRating(storeId){
    const token = localStorage.getItem('token');
    if (!token) return alert('Login to rate');
    const val = prompt('Enter rating 1-5');
    const score = parseInt(val,10);
    if (!score || score<1 || score>5) return alert('Invalid');
    await api.post('/ratings/'+storeId, { score, comment: '' });
    alert('Submitted');
    const r = await api.get('/stores');
    setStores(r.data);
  }
  return (<div>
    <h2>Stores</h2>
    <div><input placeholder="search name" value={q} onChange={e=>setQ(e.target.value)} /></div>
    <ul>{stores.filter(s=>!q||s.name.toLowerCase().includes(q.toLowerCase())).map(s=>(
      <li key={s.id}>
        <b>{s.name}</b> - {s.address} - Avg: {s.overallRating || 'N/A'}
        <button onClick={()=>submitRating(s.id)} style={{marginLeft:10}}>Rate</button>
      </li>
    ))}</ul>
  </div>);
}
