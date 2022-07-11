import React from 'react';
import TreeMap from "react-d3-treemap";
import "react-d3-treemap/dist/react.d3.treemap.css";
import { dataCountries, dataProvince, dataoldcountry } from "./countries";
import { dataJSONTremap } from './dSON';
//import {datos} from './ExcelToJson';
import { datajose } from "./data";

console.log("***DATOS DE PAÍSES***", dataCountries);
console.log("****** DATOS DE EXCEL TO JSON", dataJSONTremap)
//console.log("***DATOS JSON TRANSFORMADOS", ExcelToJson)

export default function Treemap() {
  return (
    <div className="Treemap">
      <TreeMap
        height={800}
        width={1600}
        data={datajose}
        valueUnit={"PEOPLE"}
      />
    </div>
  );
}