import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import './GeneratePassword.css';
import { FaCopy } from 'react-icons/fa';

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
        <div className="generate-password-container">
            <div className="generate-password-alert-box">
                MAC adresine göre şifre üretilmektedir.
            </div>
            <div className="generate-password-box">
                <h1>Şifre Üret</h1>
                <p>Şifreler MAC adresi kullanılarak oluşturulmaktadır.</p>
                <input
                    type="text"
                    value={macAddress}
                    placeholder="00-14-22-01-23-45"
                    onChange={handleInputChange}
                    style={{ borderColor: inputError ? 'red' : '#555' }}
                    maxLength={17}
                />
                <button
                    onClick={handleGenerateClick}
                    disabled={!macAddress || !isValidMacAddress(macAddress)}
                >
                    Şifre Üret
                </button>
                {password && (
                    <div className="generate-password-result-container">
                        <div className="generate-password-result">
                            {password}
                        </div>
                        <FaCopy className="generate-password-copy-icon" onClick={handleCopyClick} title="Kopyala" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GeneratePassword;
