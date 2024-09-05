import React from 'react';
import './Page1.css';
import { FaBuilding } from 'react-icons/fa';

// Sunucu bilgilerini array ile dinamik hale getiriyoruz
const serverInfo = [
    { ip: '192.168.90.6', url: 'a2l.servers.ngkutahya.com', name: 'A2L' },
    { ip: '192.168.90.9', url: 'a2t.servers.ngkutahya.com', name: 'A2T' },
    { ip: '192.168.90.20', url: 'a3l.servers.ngkutahya.com', name: 'A3L' },
    { ip: '192.168.90.8', url: 'a3t.servers.ngkutahya.com', name: 'A3T' },
    { ip: '192.168.90.5', url: 'b0l.servers.ngkutahya.com', name: 'B0L' },
    { ip: '192.168.90.4', url: 'b0t.servers.ngkutahya.com', name: 'B0T' },
    { ip: '192.168.90.10', url: 'b1l.servers.ngkutahya.com', name: 'B1L' },
    { ip: '192.168.90.11', url: 'b1t.servers.ngkutahya.com', name: 'B1T' },
    { ip: '192.168.90.14', url: 'o1l.servers.ngkutahya.com', name: '01L' },
    { ip: '192.168.90.13', url: 'o1t.servers.ngkutahya.com', name: '01T' },
    { ip: '192.168.90.12', url: 'psl.servers.ngkutahya.com', name: 'PSL' },
    { ip: '172.16.100.16', url: 'pst.servers.ngkutahya.com', name: 'PST' },
];

const Page1 = () => (
    <div className="page1-container">
        {/* Üst kısma başlık ekliyoruz */}
        <h1 className="page1-title">SAP Sunucu Bilgileri</h1>

        {/* Alt başlık */}
        <h2 className="page1-subtitle">SAP sunucu bilgilerini burada bulabilirsiniz</h2>
        
        {/* Sunucu bilgilerini dinamik olarak render ediyoruz */}
        {serverInfo.map((server, index) => (
            <div className="page1-info-header" key={index}>
                <FaBuilding className="page1-info-icon" />
                <div className="page1-info-content">
                    <div className="page1-info-left">
                        <div>{server.ip}</div>
                        <div>{server.url}</div>
                    </div>
                    <div className="page1-info-right">{server.name}</div>
                </div>
            </div>
        ))}
    </div>
);

export default Page1;
