import React, { useEffect, useState } from "react";
import api, { setToken } from "../api";
import Stars from "../components/Stars";

export default function Stores() {
  const [stores, setStores] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    api.get("/stores").then(r => setStores(r.data));
    const t = localStorage.getItem("token");
    if (t) setToken(t);
  }, []);

  async function rate(storeId, score) {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first.");

    await api.post(`/ratings/${storeId}`, { score });
    alert("Rating submitted!");
    const r = await api.get("/stores");
    setStores(r.data);
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Stores</h2>

      <input
        className="border p-2 rounded w-80 mb-4"
        placeholder="Search store name..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stores
          .filter(s => s.name.toLowerCase().includes(q.toLowerCase()))
          .map(store => (
            <div key={store.id} className="bg-white shadow rounded p-4">
              <h3 className="font-bold text-xl">{store.name}</h3>
              <p className="text-gray-600">{store.address}</p>

              <p className="mt-2 text-sm">
                <b>Average Rating: </b>
                {store.overallRating ? `${store.overallRating}★` : "Not rated yet"}
              </p>

              <div className="mt-3">
                <Stars rating={0} onRate={(val) => rate(store.id, val)} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
