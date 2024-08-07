'use client';

import axios from 'axios';

const api = axios.create({
    baseURL: '/api/v2',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const authenticate = async () => {
    const initData = window.Telegram.WebApp.initData;
    const url = new URL( window.location.href);
    const token = url.searchParams.get('token') || window.localStorage.getItem("token");
    if (token) window.localStorage.setItem('token', token);
    const response = await api.get(`/me?token=${token}`, {
        headers: {
            Authorization: `Bearer ${initData}`,
        },
    });
    return response.data;
};

export const fetchData = async (url, params = {}) => {
    const response = await api.get(url, {
        params
    });
    return response.data;
};

export const postData = async (url, data = {}) => {
    const initData = window.Telegram.WebApp.initData;
    const response = await api.post(url, data, {
        headers: {
            Authorization: `Bearer ${initData}`,
        },
    });
    return response.data;
};
