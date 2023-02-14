import mongoose from 'mongoose';
import connectMongo from '../conn';


jest.mock('mongoose', () => {
  return {
    connect: jest.fn(() => Promise.resolve({ connection: { readyState: 1 } })),
  };
});

describe('connectMongo', () => {
  test('should return a resolved promise when the connection is successful', async () => {
    const result = await connectMongo();
    expect(result).toBe(true);
    expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGO_URL);
  });

  test('should return a rejected promise when the connection fails', async () => {
    const error = new Error('Connection failed');
    mongoose.connect.mockImplementation(() => Promise.reject(error));

    try {
      await connectMongo();
    } catch (err) {
      expect(err).toBe(error);
    }
  });
});