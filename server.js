const sql = require('./api/backend/setup');
const app = require('./app');
const PORT = 8080;

sql.setupDB();
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});