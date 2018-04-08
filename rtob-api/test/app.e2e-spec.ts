import request from 'supertest';
import request from 'supertest';
import { HttpStatus } from '@nestjs/common';
import { GetReq, PostReq } from './share';
import { EventEntity } from '../src/healthcare/event.entity';

test('It should response 200', async () => {
  const response = await GetReq('/util/version');
  expect(response.statusCode).toBe(200);
});

test('It should response 404', async () => {
  const response = await GetReq('/util/api-not-exist');
  expect(response.statusCode).toBe(404);
});
