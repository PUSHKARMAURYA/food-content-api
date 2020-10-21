# food-content-api



![](https://cdn.pixabay.com/photo/2019/03/19/09/19/dietetics-4065158_960_720.jpg)

> This `README` documents whatever steps are necessary to fetch api.




## API Routes

| API Endpoint                           | Description                       |
|----------------------------------------|-----------------------------------|
| GET /                                  |            |
| GET /api/v1/foods                      | Get all Foods                     |
| GET /api/v1/foods/:id                  | Find a single Food of a given :id |
| POST /api/v1/foods                     | Create a new Food                 |



## API Usage

### Request GET/api                   `http://foodcontent.herokuapp.com/api/`

### Response
`x`

### Request GET/api/desc/:description   `http://foodcontent.herokuapp.com/`

### Response
`http://foodcontent.herokuapp.com/`


### Request GET/api/item/:item           `http://foodcontent.herokuapp.com/`

### Response
`http://foodcontent.herokuapp.com/`






## API HTTP Status Codes

| Status Code               | Meaning                                                                                                                |
|---------------------------|------------------------------------------------------------------------------------------------------------------------|
| 200 OK                    | Generic successful execution.                                                                                          |
| 400 Bad Request           | Your request could not be understood by the server. This may be due to the data payload is not in the expected format. |
| 404 Not Found             | The specified object could not be found.                                                                               |
| 500 Internal Server Error | We had a problem with our server. Report the issue or try again later.                                                 |



## Credits

Contributors:

- Pushkar Maurya ([https://pushkarmaurya.herokuapp.com](https://pushkarmaurya.herokuapp.com))
