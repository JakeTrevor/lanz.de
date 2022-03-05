const CosmosClient = require("@azure/cosmos").CosmosClient;
const config = require("./cosmosConfig");
const { endpoint, key, databaseId, containerId } = config;

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

//returns the db response to creating a new item
function upload(newItem){
        return container.items.create(newItem);
} 
//takes an sqlQuery as a string returns a list
function query(sqlQuery){
        const querySpec = {query:sqlQuery}
        return container.items.query(querySpec).fetchAll()
}

//give this the item you wish to delete (like as a jason)
function deleteItem(item){
        return container.item.deleteItem(item)
}

export {upload,query,deleteItem}

