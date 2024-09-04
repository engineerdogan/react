import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './GeneratePassword.css';
import { FaKey, FaClipboard, FaBuilding } from 'react-icons/fa'; // SAP için ikon ekledik

const GeneratePassword = () => {
    const [macAddress, setMacAddress] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState('');

    const formatMacAddress = (value) => {
        value = value.replace(/[^0-9A-Fa-f]/g, '');
        return value.length > 2 ? value.match(/.{1,2}/g).join('-').toUpperCase() : value.toUpperCase();
    };

    const isValidMacAddress = (macAddress) => {
        const macRegex = /^([0-9A-Fa-f]{2}[-:]){5}[0-9A-Fa-f]{2}$/;
        return macRegex.test(macAddress);
    };

    const handleInputChange = (e) => {
        let formattedValue = formatMacAddress(e.target.value);

        if (formattedValue.length > 17) {
            formattedValue = formattedValue.slice(0, 17);
        }

        setMacAddress(formattedValue);
        setPassword('');
        setInputError('');
    };

    const handleGenerateClick = () => {
        const trimmedMacAddress = macAddress.trim().toUpperCase();

        if (isValidMacAddress(trimmedMacAddress)) {
            const hash = CryptoJS.SHA256(trimmedMacAddress).toString(CryptoJS.enc.Base64);
            const newPassword = hash.substring(0, 12);
            setPassword(newPassword);
            setInputError('');
        } else {
            setPassword('');
            setInputError('Lütfen geçerli bir MAC adresi girin.');
        }
    };

    const handleCopyClick = () => {
        if (password) {
            navigator.clipboard.writeText(password).then(() => {
                alert('Şifre panoya kopyalandı!');
            }).catch((error) => {
                alert('Şifre kopyalanırken bir hata oluştu.');
                console.error('Kopyalama hatası:', error);
            });
        }
    };

    return (
        <div className="container">
            <div className="main-title">Şifre Oluştur</div>
            <div className="main-subtitle">(Şifreler MAC adresiyle oluşturulmakta)</div>
            <div className="header-box">
                <FaKey className="header-icon" />
                <div>
                    <div className="header-title">Password Generator</div>
                    <div className="sub-title">MAC adresine göre şifre üretilmektedir.</div>
                </div>
            </div>
            <input
                type="text"
                value={macAddress}
                placeholder="00-14-22-01-23-45"
                onChange={handleInputChange}
                style={{ borderColor: inputError ? 'red' : '#333' }} // Hata durumunda kenarlık rengi
            />
            {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
            {password && <div id="result">{password}</div>}
            <div className="button-container">
                <button
                    className="generate-button"
                    onClick={handleGenerateClick}
                    disabled={!macAddress || !isValidMacAddress(macAddress)}
                >
                    Şifre Üret
                </button>
                <button className="copy-button" onClick={handleCopyClick}>
                    <FaClipboard className="copy-icon" /> {/* Yeni simge kullanıldı */}
                </button>
            </div>
            <div className="info-header">
                <FaBuilding className="info-icon" /> {/* SAP için ikon */}
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
                        <div>192.168.90.20</div>
                        <div>a3l.servers.ngkutahya.com</div>
                    </div>
                    <div className="info-right">A3L</div>
                </div>
            </div>
            <div className="info-header">
                <FaBuilding className="info-icon" />
                <div className="info-content">
                    <div className="info-left">
                        <div>192.168.90.8</div>
                        <div>a3t.servers.ngkutahya.com</div>
                    </div>
                    <div className="info-right">A3T</div>
                </div>
            </div>
            <div className="info-header">
                <FaBuilding className="info-icon" />
                <div className="info-content">
                    <div className="info-left">
                        <div>192.168.90.5</div>
                        <div>b0l.servers.ngkutahya.com</div>
                    </div>
                    <div className="info-right">B0L</div>
                </div>
            </div>
            <div className="info-header">
                <FaBuilding className="info-icon" />
                <div className="info-content">
                    <div className="info-left">
                        <div>192.168.90.4</div>
                        <div>b0t.servers.ngkutahya.com</div>
                    </div>
                    <div className="info-right">B0T</div>
                </div>
            </div>
            <div className="info-header">
                <FaBuilding className="info-icon" />
                <div className="info-content">
                    <div className="info-left">
                        <div>192.168.90.10</div>
                        <div>b1l.servers.ngkutahya.com</div>
                    </div>
                    <div className="info-right">B1L</div>
                </div>
            </div>
            <div className="info-header">
                <FaBuilding className="info-icon" />
                <div className="info-content">
                    <div className="info-left">
                        <div>192.168.90.11</div>
                        <div>b1t.servers.ngkutahya.com</div>
                    </div>
                    <div className="info-right">B1T</div>
                </div>
            </div>
        </div>
    );
};

export default GeneratePassword;
