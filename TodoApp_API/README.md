# **Todo App**

## API DOCUMENTATION

<br/>

## **Create a new Todo list Item**

**Method** : `POST`

### Request

    http://localhost:8000/item

### Body

    Content-Type: application/json
    {
     "title": "Item",
     "description": "Item Description"
    }

### Response

**Status 200:**

```json
{
  "item": {
    "title": "Item",
    "description": "Item Description",
    "createdAt": "2021-08-08T15:16:29.195Z",
    "id": "ba3ffe6e-4227-41b9-9251-eab364bf8a35"
  },
  "message": "Item added successfully"
}
```

<br/>

## **Fetch Todo list Items**

**Method** : `GET`

### Request

    http://localhost:8000/items

### Response

**Status 200:**

```json
{
  "length": 3,
  "items": [
    {
      "title": "Todo item 3",
      "description": "Item 3",
      "createdAt": "2021-08-08T15:21:56.976Z",
      "id": "20c86b74-4dc6-4f8e-a6aa-6a8d8c65c40d"
    },
    {
      "title": "Todo item 2",
      "description": "Item 2",
      "createdAt": "2021-08-08T15:22:02.102Z",
      "id": "17903a33-8389-4993-a36f-abda5d5dfb43"
    },
    {
      "title": "Todo item 1",
      "description": "Item 1",
      "createdAt": "2021-08-08T15:22:07.836Z",
      "id": "5052ae6c-0d12-4833-91dd-f02b6c1d8449"
    },
    {
      "title": "Item",
      "description": "Item Description",
      "createdAt": "2021-08-08T15:16:29.195Z",
      "id": "ba3ffe6e-4227-41b9-9251-eab364bf8a35"
    }
  ]
}
```

<br/>

## **Fetch a specific Item**

**Method** : `GET`

### Request

    http://localhost:8000/item?id=ba3ffe6e-4227-41b9-9251-eab364bf8a35

### Query

    id: ba3ffe6e-4227-41b9-9251-eab364bf8a35

### Response

**Status 200:**

```json
{
  "item": {
    "title": "Item",
    "description": "Item Description",
    "createdAt": "2021-08-08T15:16:29.195Z",
    "id": "ba3ffe6e-4227-41b9-9251-eab364bf8a35"
  },
  "message": "Item Found"
}
```

**Status 404:**

```json
{
  "message": "Item Not Found"
}
```

<br/>

## **Update a specific Item**

**Method** : `Patch`

### Request

    http://localhost:8000/item/ba3ffe6e-4227-41b9-9251-eab364bf8a35

### Params

    id: ba3ffe6e-4227-41b9-9251-eab364bf8a35

### Body

    Content-Type: application/json
    {
     "title": "New Item",
     "description": "New Item Description"
    }

### Response

**Status 200:**

```json
{
  "item": {
    "title": "New Item",
    "description": "New Item Description",
    "createdAt": "2021-08-08T15:16:29.195Z",
    "id": "ba3ffe6e-4227-41b9-9251-eab364bf8a35"
  },
  "message": "Item Updated successfully"
}
```

**Status 404:**

```json
{
  "message": "Item Not Found"
}
```

<br/>

## **Delete a specific Item**

**Method** : `DELETE`

### Request

    http://localhost:8000/item/ba3ffe6e-4227-41b9-9251-eab364bf8a35

### Params

    id: ba3ffe6e-4227-41b9-9251-eab364bf8a35

### Response

**Status 200:**

```json
{
  "length": 3,
  "items": [
    {
      "title": "Todo item 3",
      "description": "Item 3",
      "createdAt": "2021-08-08T15:21:56.976Z",
      "id": "20c86b74-4dc6-4f8e-a6aa-6a8d8c65c40d"
    },
    {
      "title": "Todo item 2",
      "description": "Item 2",
      "createdAt": "2021-08-08T15:22:02.102Z",
      "id": "17903a33-8389-4993-a36f-abda5d5dfb43"
    },
    {
      "title": "Todo item 1",
      "description": "Item 1",
      "createdAt": "2021-08-08T15:22:07.836Z",
      "id": "5052ae6c-0d12-4833-91dd-f02b6c1d8449"
    }
  ],
  "message": "Item Deleted Successfully"
}
```

**Status 404:**

```json
{
  "message": "Item Not Found"
}
```
