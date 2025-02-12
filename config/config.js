module.exports = {
    "development": {
        "username": "root",
        "password": "root",
        "database": "sequelize_barter_db",
        "port": 3306,
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "use_env_variable": "JAWSDB_URL",
        "dialect": "mysql"
    },
    "jwt_privatekey": "*privatekey*"
}