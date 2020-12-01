export const login = user => {
    return $.ajax({
        method: 'post',
        url: 'api/session',
        data: { user }
    });
};

export const fetchUser = userId => {
    return $.ajax({
        method: 'get',
        url: `api/users/${userId}`,
    });
};

export const signup = user => {
    return $.ajax({
        method: 'post',
        url: 'api/users',
        data: { user }
    });
};

export const logout = () => {
    return $.ajax({
        method: 'delete',
        url: '/api/session'
    });
};
