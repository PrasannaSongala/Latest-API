// ********* Get model ID from table ********* //
const getDeviceModelID = async (modeldata, db, dbconnection)  => {
    try {
        // let model = await db.queryDB(`SELECT id FROM ${db.dbname()}.devicemodel WHERE devicetype = '${modeldata.devicetype}' and model = '${modeldata.model}'`, 0 ,dbconnection);
        let model = await db.queryDB(`SELECT id FROM ${db.dbname()}.devicemodel WHERE model = '${modeldata.model}'`, 0 ,dbconnection);
        if(model && model.length > 0) {
            return model[0].id;
        } else {
            return null;
        }
    } catch(error) {
        console.log("### Error in getDeviceModelID() ###");
        throw error;
    }
};

// ********* Get model ********* //
const getModel = async (modelid, db, dbconnection)  => {
    try {
        let model = await db.queryDB(`SELECT * FROM ${db.dbname()}.devicemodel WHERE id = '${modelid}'`, 0 ,dbconnection);
        if(model && model.length > 0) {
            return model[0];
        } else {
            return null;
        }
    } catch(error) {
        console.log("### Error in getModel() ###");
        throw error;
    }
};

// ********* List models ********* //
const listModels = async (db, dbconnection)  => {
    try {
        let model = await db.queryDB(`SELECT * FROM ${db.dbname()}.devicemodel`, 0 ,dbconnection);
        if(model && model.length > 0) {
            return model;
        } else {
            return null;
        }
    } catch(error) {
        console.log("### Error in listModels() ###");
        throw error;
    }
};

module.exports = {
    getModelID: getDeviceModelID,
    get: getModel,
    list: listModels
};