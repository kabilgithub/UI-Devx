"use client";
import React from 'react';

export default function Signup() {
    

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '20px' }}>Login</h2>
                
                    <label htmlFor="Firstname" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px',color: "blueviolet" }}>Firstname</label>
                    <input type="text" id="Firstname" name="Firstname" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color:'black'}} />
                    
                    <label htmlFor="Lastname" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px',color: "blueviolet" }}>Lastname</label>
                    <input type="text" id="Lastname" name="Lastnamee" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px', color:'black' }} />

                    <label htmlFor="password" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px', color:"darkviolet" }}>Password</label>
                    <input type="password" id="password" name="password" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px',color:"black" }} />

                    <label htmlFor="Confirm Password" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px',color: "blueviolet" }}>Confirm Password</label>
                    <input type="text" id="Confirm Paswword" name="Confirm Password" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px',color:'black' }} />

                    <label htmlFor="Email" style={{ display: 'block', textAlign: 'left', margin: '10px 0 5px',color: "blueviolet" }}>Email</label>
                    <input type="text" id="Email" name="Email" required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '4px',color:'black' }} />

                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Login
                    </button>
                
            </div>
        </div>
    );
}