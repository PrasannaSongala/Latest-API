// ********* Get Channel configurations ********* //
export const getChannelConfigurations = async (sensortype: string) => {
    let channelConfigs = {
        ch1: "temp",
        ch2: "temp",
        ch3: "temp",
        ch4: "humi"
    };
    if (sensortype.toLocaleLowerCase() == "fx150") {
        channelConfigs = {
            ch1: "temp",
            ch2: "temp",
            ch3: "temp",
            ch4: "humi"
        };
    } else if (sensortype.toLocaleLowerCase() == "fx350") {
        channelConfigs = {
            ch1: "temp/volt/curr",
            ch2: "temp/volt/curr",
            ch3: "temp",
            ch4: "humi"
        };
    } else if (sensortype.toLocaleLowerCase() == "fx700" || sensortype.toLocaleLowerCase() == "px") {
        channelConfigs = {
            ch1: "temp",
            ch2: "contact",
            ch3: "temp",
            ch4: "humi"
        };

        // if (modelid) {
        //     //let devicemodel = await deviceModelService.get(modelid, db, dbconnection);

        //     // ADD UOM COLUM TO DB =====================================================

        //     if (devicemodel && (devicemodel.description == "10K/PT1000 + Internal sensor" ||
        //         devicemodel.description == "Internal sensor" || devicemodel.description == "10K/PT1000 sensor" || devicemodel.description == "External sensor")) {
        //         channelConfigs.ch1 = "temp";
        //     } else if (devicemodel && (devicemodel.description == "Voltage + Internal sensor" ||
        //         devicemodel.description == "Voltage sensor")) {
        //         channelConfigs.ch1 = "volt";
        //     } else if (devicemodel && (devicemodel.description == "Current + Internal sensor" ||
        //         devicemodel.description == "Current sensor")) {
        //         channelConfigs.ch1 = "current";
        //     } else {
        //         channelConfigs.ch1 = "";
        //     }
        // }
    } else if (sensortype.toLocaleLowerCase() == "fx100") {
        channelConfigs = {
            ch1: "temp",
            ch2: "temp",
            ch3: "",
            ch4: ""
        };
    } else if (sensortype.toLocaleLowerCase() == "fx200") {
        channelConfigs = {
            ch1: "",
            ch2: "",
            ch3: "temp",
            ch4: "humi"
        };
    } else if (sensortype.toLocaleLowerCase() == "fx300") {
        channelConfigs = {
            ch1: "temp/volt/curr",
            ch2: "temp/volt/curr",
            ch3: "",
            ch4: ""
        };
        // modelid ===> calculation
    } else if (sensortype.toLocaleLowerCase() == "temp/temp") {
        channelConfigs = {
            ch1: "temp",
            ch2: "temp",
            ch3: "",
            ch4: ""
        };
    } else if (sensortype.toLocaleLowerCase() == "temp/humidity") {
        channelConfigs = {
            ch1: "",
            ch2: "",
            ch3: "temp",
            ch4: "humi"
        };
    } else if (sensortype.toLocaleLowerCase() == "analog sensor") {
        channelConfigs = {
            ch1: "volt/curr",
            ch2: "volt/curr",
            ch3: "",
            ch4: ""
        };
        // modelid ===> calculation
    } else if (sensortype.toLocaleLowerCase() == "contact sensor" || sensortype.toLocaleLowerCase() == "s400") {
        channelConfigs = {
            ch1: "contact",
            ch2: "",
            ch3: "",
            ch4: ""
        };
    } else if (sensortype.toLocaleLowerCase() == "s100" || sensortype.toLocaleLowerCase() == "s200" || sensortype.toLocaleLowerCase() == "s210" || sensortype.toLocaleLowerCase() == "s220") {
        channelConfigs = {
            ch1: "temp",
            ch2: "humi",
            ch3: "",
            ch4: ""
        };
    } else if (sensortype.toLocaleLowerCase() == "s300") {
        channelConfigs = {
            ch1: "temp",
            ch2: "",
            ch3: "",
            ch4: ""
        };
    } else if (sensortype.toLocaleLowerCase() == "fx900") {
        channelConfigs = {
            ch1: "",
            ch2: "",
            ch3: "temp",
            ch4: ""
        };
    }

    return channelConfigs;
};