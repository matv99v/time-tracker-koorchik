## Request

POST /api/v1/tasks

```javascript
   {
       "data": {
            "name": "Задача 1"
       }
    }
```


## Response 

201 Created

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
