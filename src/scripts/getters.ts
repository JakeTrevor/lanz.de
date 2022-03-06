import { CosmosClient } from "@azure/cosmos";
import config from "./cosmosConfig";

let { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

//returns the db response to creating a new item
function upload(newItem: { name: string }) {
  return container.items.create(newItem);
}

//takes an sqlQuery as a string returns a list
//?of what?
async function query(sqlQuery: string) {
  const querySpec = { query: sqlQuery };
  return await (
    await container.items.query(querySpec).fetchAll()
  ).resources;
}

//give this the item you wish to delete (like as a jason)
function deleteItem(item: string) {
  return container.item(item).delete;
}

export { upload, query, deleteItem };

query("SELECT * FROM pictures").then((e) => {
  console.log(e);
});
