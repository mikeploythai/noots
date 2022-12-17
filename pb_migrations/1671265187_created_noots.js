migrate((db) => {
  const collection = new Collection({
    "id": "lsfesn0cenbznb6",
    "created": "2022-12-17 08:19:47.980Z",
    "updated": "2022-12-17 08:19:47.980Z",
    "name": "noots",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cnwf0fin",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": true
        }
      },
      {
        "system": false,
        "id": "ceoixgvk",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "7cyslp7r",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "@request.auth.id = user",
    "viewRule": "@request.auth.id = user",
    "createRule": "@request.auth.id = user",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lsfesn0cenbznb6");

  return dao.deleteCollection(collection);
})
