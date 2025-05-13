// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './configs/mongodb.js'
// import connectCloudinary from './configs/cloudinary.js'
// import userRouter from './routes/userRoutes.js'
// import { clerkMiddleware } from '@clerk/express'
// import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js'
// import educatorRouter from './routes/educatorRoutes.js'
// import courseRouter from './routes/courseRoute.js'
// import contactRoutes from './routes/contactRoutes.js';

// // Initialize Express
// const app = express()

// // Connect to database
// await connectDB()
// await connectCloudinary()

// // Middlewares
// app.use(cors())
// app.use(clerkMiddleware())

// // Routes
// app.get('/', (req, res) => res.send("API Working"))
// app.post('/clerk', express.json() , clerkWebhooks)
// app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)
// app.use('/api/educator', express.json(), educatorRouter)
// app.use('/api/course', express.json(), courseRouter)
// app.use('/api/user', express.json(), userRouter)

// app.use('/api', contactRoutes);

// // Port
// const PORT = process.env.PORT || 5000

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// })

import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import { clerkMiddleware } from '@clerk/express';
import { clerkWebhooks, stripeWebhooks } from './controllers/webhooks.js';
import educatorRouter from './routes/educatorRoutes.js';
import courseRouter from './routes/courseRoute.js';
import contactRoutes from './routes/contactRoutes.js';

const app = express();

// ✅ Add this BEFORE routes
app.use(cors());
app.use(express.json()); // ✅ MUST be here
app.use(clerkMiddleware());

// Connect to database
await connectDB();
await connectCloudinary();

// Routes
app.get('/', (req, res) => res.send("API Working"));
app.post('/clerk', express.json(), clerkWebhooks);
app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks);
app.use('/api/educator', educatorRouter);
app.use('/api/course', courseRouter);
app.use('/api/user', userRouter);

// ✅ Mount contact route after json middleware
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
