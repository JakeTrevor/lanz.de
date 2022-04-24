import { CosmosClient, ItemResponse } from "@azure/cosmos";
import config from "./cosmosConfig";

let { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

// returns the response to creating a new item
function upload(newItem: { name: string }): Promise<ItemResponse<any>> {
  return container.items.create(newItem);
}

// takes an sqlQuery as a string returns a list of obejects
// no defined schema, so no defined object type
async function query(sqlQuery: string): Promise<any[]> {
  const querySpec = { query: sqlQuery };
  return (await container.items.query(querySpec).fetchAll()).resources;
}

// pass id of item to be deleted
function deleteItem(item: string) {
  return container.item(item).delete();
}

// utils:
function deleteAll(): void {
  query("SELECT * FROM pictures").then((data) => {
    data.map((each) => {
      container.item(each.id).delete();
    });
  });
}

function printAll(): void {
  query("SELECT * FROM pictures").then((e) => {
    console.log("records:");
    console.log(e);
  });
}

export { upload, query, deleteItem };
