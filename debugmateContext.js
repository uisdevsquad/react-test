
function getUser() {
    return {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@email.com'
    };
}

function getEnvironment() {
    return {
        environment: 'production',
        debug: false,
        timezone: 'UTC',
        server: 'nginx',
        database: 'PostgreSQL 13',
        npm: '6.14.8'
    };
}

export { getUser, getEnvironment };