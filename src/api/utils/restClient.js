import axios from 'axios';

/*
This method will be responsible for submitting api request and getting back the response/error.

methodType : e.g POST,PUT,DELETE,GET
endpointURL : e.g : https://hew.id.com/v1
headers : e.g {'Content-Type':'application/json'}
body : data to send along with request
authorizationParams: credentials if any

*/
export default function submitAPIRequest(methodType, endpointURL, headers, body, authorizationParams) {
    let requiredParams = {
        method: methodType,
        url: endpointURL,
        headers: headers,
        body: body,
        authorization: authorizationParams
    };
    
    console.log('Required params for the API: ' + JSON.stringify(requiredParams, null, "\t"));  // prints pretty JSON
  /*   reporter.startStep("REQUEST");
    reporter.startStep(JSON.stringify(requiredParams));
    reporter.endStep(); */

    return axios(requiredParams).then(res => res)
                                .catch(error => error)
                                
}
