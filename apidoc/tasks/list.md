## Request

GET /api/v1/tasks

## Response 

200 Ok

```javascript
   {
        "status": 1,
        "data": [{
            "id": "AAAA-FFFF-DDDD-RRRR",
            "name": 'Задача 1',
            "spent": 1230 // in seconds
            "createdAt": "2015-04-02T14:20Z",
            "updatedAt": "2015-04-02T14:20Z", 
            "status": "ACTIVE" // "ACTIVE" | "INACTIVE"
       }]
   }
```
