# food-content-api 

A simple JSON API for nutrition value in food item.

![](https://cdn.pixabay.com/photo/2019/03/19/09/19/dietetics-4065158_960_720.jpg)

> This `README` documents whatever steps are necessary to fetch api.




## API Routes

| API Endpoint                           | Description                                                                        |
|----------------------------------------|------------------------------------------------------------------------------------|
| GET /api/                              | Get all Foods  items nutritional value .                                           |
| GET /api/desc/:id                      | Food items and their nutritional value of a given id(`description of food item `) |
| GET /api/item/:id                      | Food items and their  their nutritional value of a given id(`foood item`)         |



## API Usage

### Request GET/api                   ([`http://foodcontent.herokuapp.com/api/`](http://foodcontent.herokuapp.com/api/))

### Response
```javascript

  {
    "_id": "5f8a9e693f267505b5569627",
    "Category": "POTATO SOUP",
    "Description": "POTATO SOUP,INST,DRY MIX",
    "Nutrient Data Bank Number": "6969",
    "Data": {
      "Alpha Carotene": "7",
      "Ash": "5.76",
      "Beta Carotene": "32",
      ...
      "Potassium": "229",
      "Sodium": "5",
      "Zinc": "0.28"   
    }
  }
]
```

### Request GET/api/desc/:description   ([`http://foodcontent.herokuapp.com/api/desc/sweet`](http://foodcontent.herokuapp.com/api/desc/sweet))

### Response
```javascript
  {
    "_id": "5f8a9e693f267505b556909f",
    "Category": "WHEY",
    "Description": "WHEY,SWEET,FLUID",
    "Nutrient Data Bank Number": "1114",
    "Data": {
      "Alpha Carotene": "0",
      "Ash": "0.53",
      "Beta Carotene": "1",
      "Beta Cryptoxanthin": "0",
      .....
      "Carbohydrate": "5.14",
      "Vitamin C": "0.0",
      "Vitamin E": "0.0",
       "Vitamin K": "0.0"
      }
    }
  }
]
     
```
      


### Request GET/api/item/:item          ([`http://foodcontent.herokuapp.com/api/item/butter`](http://foodcontent.herokuapp.com/api/item/butter))

### Response
```javascript
[
  {
    "_id": "5f8a9e693f267505b5569039",
    "Category": "BUTTER",
    "Description": "BUTTER,WITH SALT",
    "Nutrient Data Bank Number": "1001",
    "Data": {
      "Alpha Carotene": "0",
      "Ash": "2.11",
      "Beta Carotene": "158",
      "Beta Cryptoxanthin": "0",
      "Carbohydrate": "0.06",
      "Cholesterol": "215",
      "Choline": "19",
      ......
      "Vitamin C": "0.0",
      "Vitamin E": "0.0",
      "Vitamin K": "0.0"
      }
    }
  }
]
```

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
