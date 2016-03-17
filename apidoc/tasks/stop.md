## Request

PUT /api/v1/tasks/:id/stop

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
            "spent": 1230 // in seconds
            "createdAt": "2015-04-02T14:20Z",
            "updatedAt": "2015-04-02T14:20Z", 
            "status": "INACTIVE" // "ACTIVE" | "INACTIVE"
       }
   }
```
