import submitAPIRequest from '../utils/restClient';

beforeEach(() => {
  console.log("********* Test Started *****************");

})

const headers = {hello:'boy'};
describe ('Demo Tests 1', () => {

test('Test Demo API 2', async () => {
  
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=2');
  const responseData = JSON.stringify(response.data, null, 4);
 
  expect(true).toBe(true);
});

test.skip('Test Demo API 2', async () => {
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=1');
 // console.log(response);
 const responseData = JSON.stringify(response.data, null, 4);
  reporter.endStep();
  reporter.startStep("RESPONSE");
  reporter.startStep(responseData);
  reporter.endStep();
  reporter.endStep();

  expect(true).toBe(true);
});

test('Test Demo API 3', async () => {
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=2');
  const responseData = JSON.stringify(response.data, null, 4);


  expect(true).toBe(true);
});

test('Test Demo API 4', async () => {
  const response = await submitAPIRequest('GET', 'https://reqres.in/api/users?page=1');

  const responseData = JSON.stringify(response.data, null, 4);
 
  expect("Jaikant").toBe(Dangi);
});

});;
