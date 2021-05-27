const defaultDB = 'postgres://postgres:postgres@127.0.0.1:5432/snakeapi'
const dataUrl = process.env.DATAMANUAL_URL || defaultDB


const [, , DB_USER, DB_USER_PWD, DB_HOST, DB_PORT, DB_NAME] = dataUrl.match(/^(postgres):\/\/(.*):(.*)@(.*):(\d+)\/(.*)$/,)

console.log('CHAUSSSSETTTTTTTEEEEEE')
console.log('TEST=>', process.env.DATAMANUAL_URL);
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
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
