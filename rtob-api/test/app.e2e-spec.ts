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

test('/event, new event, non-auth, 201 created', async () => {
  const event = new EventEntity();
  // "D4": {"problems": {"1": {"signs": {"11": {"cht": "高血糖", "eng": "hyperglycemia"}, 
  event.omahaRaw = '{"D4":"TODO"}';
  event.pcsDomain = 'D4';
  event.pcsProblem = 1;
  event.pcsSign = 11;
  const response = await PostReq('/event', event);
  expect(response.statusCode).toBe(HttpStatus.CREATED);
});

test('/event/events, non-auth , 200 ok', async () => {
  const response = await GetReq('/event/events');
  expect(response.statusCode).toBe(200);
  console.log(response.body);
});
