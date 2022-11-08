import * as httpRequest from '../utils/httpRequest';

export const getMessageById = async (idMessage, accessToken, AxiosJWT) => {
    try {
        const res = await AxiosJWT.get('/message/id/' + idMessage, { headers: { token: `baerer ${accessToken}` } });

        return res.data;
    } catch (error) {
        return null;
    }
};

export const getMessageByIdChat = async (idChat, limit, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.get('/message/limit', {
            params: {
                limit: limit,
                idchat: idChat,
            },
            headers: { token: `baerer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        return null;
    }
};

export const addUserSeenToMess = async (idMess, data, accessToken, axiosJWT) => {
    try {
        await axiosJWT.put(`/message/add_seen/${idMess}`, data, {
            headers: { token: `baerer ${accessToken}` },
        });

        return true;
    } catch (error) {
        console.log('Người dùng không tồn tại!');
    }
};

export const addMess = async (data, accessToken, axiosJWT) => {
    try {
        const res = await axiosJWT.post(`/message/`, data, {
            headers: { token: `baerer ${accessToken}` },
        });

        return res.data;
    } catch (error) {
        console.log('Luu tin nhan khong thanh cong');
    }
};