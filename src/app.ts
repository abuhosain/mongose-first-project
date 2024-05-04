import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// applications
app.use('/api/v1/students', StudentRoutes);

const getAControlar = (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
};

app.get('/', getAControlar);

export default app;
