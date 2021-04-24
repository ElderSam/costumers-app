import app from './server';
import connection from './database/connect';

connection.create().then(() => console.log('✅ Successfully connected with database'));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`✅ Server started at http://localhost:${PORT}`));