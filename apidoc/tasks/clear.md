## Request

PUT /api/v1/tasks/:id/clear

```javascript
   {
       "data": {
            "id": "AAAA-FFFF-DDDD-RRRR"
       }
    }
```


## Response 

200 Ok

```javascript
    {
        "status": 1,
        "data": {
            "id": "AAAA-FFFF-DDDD-RRRR",
            "name": 'Задача 1',
            "spent": 0 // in seconds
            "createdAt": "2015-04-02T14:20Z",
            "updatedAt": "2015-04-02T14:20Z", 
            "status": "ACTIVE" // "ACTIVE" | "INACTIVE"
       }
   }
```
