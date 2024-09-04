import React from 'react';
import './Page1.css';
import { FaBuilding } from 'react-icons/fa';

const Page1 = () => (
    <div className="page1-container">
        <div className="info-header">
            <FaBuilding className="info-icon" />
            <div className="info-content">
                <div className="info-left">
                    <div>192.168.90.6</div>
                    <div>a2l.servers.ngkutahya.com</div>
                </div>
                <div className="info-right">A2L</div>
            </div>
        </div>
        {/* Diğer header'ları buraya ekleyin */}
        <div className="info-header">
            <FaBuilding className="info-icon" />
            <div className="info-content">
                <div className="info-left">
                    <div>192.168.90.9</div>
                    <div>a2t.servers.ngkutahya.com</div>
                </div>
                <div className="info-right">A2T</div>
            </div>
        </div>
        <div className="info-header">
            <FaBuilding className="info-icon" />
            <div className="info-content">
                <div className="info-left">
                    <div>192.168.90.7</div>
                    <div>a2m.servers.ngkutahya.com</div>
                </div>
                <div className="info-right">A2M</div>
            </div>
        </div>
    </div>
);

export default Page1;
