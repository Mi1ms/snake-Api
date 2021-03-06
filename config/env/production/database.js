// const defaultDB = 'postgres://postgres:postgres@127.0.0.1:5432/snakeapi'
const dataUrl = process.env.DATAMANUAL_URL || "";


const [, , DB_USER, DB_USER_PWD, DB_HOST, DB_PORT, DB_NAME] = dataUrl.match(/^(postgres):\/\/(.*):(.*)@(.*):(\d+)\/(.*)$/,)

console.log('PROD =>');
console.log('PROCESS ENV =>', process.env);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: DB_HOST,
        port: DB_PORT,
        database: DB_NAME,
        username: DB_USER,
        password: DB_USER_PWD,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {}
    },
  },
});
