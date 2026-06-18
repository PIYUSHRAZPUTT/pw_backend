import express from 'express';
import authRoute from './routes/authRoute.js'
import protectedRoute from './routes/protectedRoute.js'
const app= express();

app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api', protectedRoute);

export default app;
