import submitAPIRequest from '../utils/restClient';
import * as fs from 'fs'

beforeEach(() => {
  console.log("********* Test Started *****************");

})

const headers = {hello:'boy'};
describe ('Demo Tests', () => {

test('Test Demo API 1', async () => {
  
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=2');
  const responseData = JSON.stringify(response.data, null, 4);
  console.log('Printing data');
   reporter.endStep();
  reporter.startStep("RESPONSE");
  reporter.startStep(responseData);
  reporter.endStep();
  reporter.endStep();
  const screenshotBuffer = fs.readFileSync('C:/Users/jaikant.lnu/Desktop/Capture.PNG');
  reporter.addAttachment("Screenshot", screenshotBuffer, "image/png"); 

  expect(false).toBe(true);
});

test.skip('Test Demo API 2', async () => {
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=2');
 // console.log(response);
  expect(true).toBe(true);
});

test.skip('Test Demo API 3', async () => {
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=2');
  expect ("jaikant").toBe("Dangi");
  expect(true).toBe(false);
});

test.skip('Test Demo API 4', async () => {
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=2');
  expect(true).toBe(true);
});

});;
