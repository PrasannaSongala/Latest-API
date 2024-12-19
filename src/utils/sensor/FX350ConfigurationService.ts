export const getUOMForSubType = (subtype: string): string => {
  let uom = '';
  const subtypes = getSensorSubTypes();
  const subtypeObj = subtypes.find((item) => item.type == subtype);
  if (subtypeObj) {
    uom = subtypeObj.UOM;
  }
  return uom;
};

function getSensorSubTypes() {
  const types = [
    {
      type: 'MODUS-LPD',
      UOMcode: 'NULL',
      Description: 'Low Pressure Differential',
      Offset1: '0',
      Offset2: '-2',
      Scale1: '0.2',
      Scale2: '1',
      UOM: '"H2O',
      SubType: 'NULL',
      nDecimals: '3',
      isTemp: '0'
    },
    {
      type: 'MODUS-CO2',
      UOMcode: 'NULL',
      Description: 'CO2 Sensor',
      Offset1: '-4',
      Offset2: '0',
      Scale1: '0.625',
      Scale2: '1',
      UOM: '%CO2',
      SubType: 'NULL',
      nDecimals: '3',
      isTemp: '0'
    },
    {
      type: 'MODUSRPM1',
      UOMcode: 'NULL',
      Description: 'Room Pressure Monitor 0.1',
      Offset1: '-4',
      Offset2: '-0.1',
      Scale1: '0.0125',
      Scale2: '1',
      UOM: '"H2O',
      SubType: 'NULL',
      nDecimals: '3',
      isTemp: '0'
    },
    {
      type: 'MODUSRPM5',
      UOMcode: 'NULL',
      Description: 'Room Pressure Monitor 0.5',
      Offset1: '-4',
      Offset2: '-0.5',
      Scale1: '0.0625',
      Scale2: '1',
      UOM: '"H2O',
      SubType: 'NULL',
      nDecimals: '3',
      isTemp: '0'
    },
    {
      type: 'MODUS-CO5',
      UOMcode: 'NULL',
      Description: 'CO2 Sensor 5%',
      Offset1: '-4',
      Offset2: '0',
      Scale1: '0.3125',
      Scale2: '1',
      UOM: '%CO2',
      SubType: 'NULL',
      nDecimals: '3',
      isTemp: '0'
    },
    {
      type: 'MODUS-CO20',
      UOMcode: 'NULL',
      Description: 'CO2 Sensor 20%',
      Offset1: '-4',
      Offset2: '0',
      Scale1: '1.25',
      Scale2: '1',
      UOM: '%CO2',
      SubType: 'NULL',
      nDecimals: '3',
      isTemp: '0'
    }
  ];
  return types;
}
