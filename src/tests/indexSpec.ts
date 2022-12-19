import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('testing api/images endpoint', (): void => {
  it('testing endpoint with valid filename and width and height', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=fjord&width=100&height=200');
    expect(response.status).toBe(200);
  });
  it('testing endpoint with valid filename and width only', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=fjord&width=100');
    expect(response.status).toBe(200);
  });
  it('testing endpoint with valid filename and height only', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=fjord&height=200');
    expect(response.status).toBe(200);
  });
  it('testing endpoint without filename', async (): Promise<void> => {
    const response = await request.get('/api/images?width=100&height=200');
    expect(response.status).toBe(400);
  });
  it('testing endpoint without height and width', async (): Promise<void> => {
    const response = await request.get('/api/images?filename=fjord');
    expect(response.status).toBe(400);
  });
  it('testing endpoint with a not existing filename', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=fjooord&width=100&height=200'
    );
    expect(response.status).toBe(404);
  });
  it('testing endpoint with valid filename and width and height for second time', async (): Promise<void> => {
    await request.get('/api/images?filename=fjord&width=400&height=200');
    const response = await request.get('/api/images?filename=fjord&width=400&height=200');
    expect(response.status).toBe(200);
  });
});
