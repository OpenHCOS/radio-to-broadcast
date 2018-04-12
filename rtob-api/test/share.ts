const request = require('supertest');
const req = request('http://localhost:3000');
import { API_PREFIX } from '../src/rtob.common';

function getApiUri(path){
  return `${API_PREFIX}${path}`

}

export async function GetReq(path, jwtToken){
    const apiuri = getApiUri(path)
    if(jwtToken){
      return await req.get(apiuri).set('Authorization', 'bearer ' + jwtToken);
    }else{
      return await req.get(apiuri);
    }
  }
  
  export async function PostReq(path,body,jwtToken){
    const apiuri = getApiUri(path)
    if(jwtToken){
        return await req.post(apiuri).set('Authorization', 'bearer ' + jwtToken).send(body);
      }else{
        return await req.post(apiuri).send(body);
      }
}