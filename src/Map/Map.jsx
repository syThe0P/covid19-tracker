import React from "react";
import { VectorMap } from "react-jvectormap";



const Map = ({data}) => {
    const stateCodeMap = {
        "Bihar": "IN-BR",
        "Puducherry": "IN-PY",
        "Daman and Diu": "IN-DD",
        "Dadra and Nagar Haveli": "IN-DN",
        "Delhi": "IN-DL",
        "Nagaland": "IN-NL",
        "West Bengal": "IN-WB",
        "Haryana": "IN-HR",
        "Himachal Pradesh": "IN-HP",
        "Assam": "IN-AS",
        "Uttaranchal": "IN-UT",
        "Jharkhand": "IN-JH",
        "Jammu and Kashmir": "IN-JK",
        "Uttar Pradesh": "IN-UP",
        "Sikkim": "IN-SK",
        "Mizoram": "IN-MZ",
        "Chhattisgarh": "IN-CT",
        "Chandigarh": "IN-CH",
        "Goa": "IN-GA",
        "Gujarat": "IN-GJ",
        "Rajasthan": "IN-RJ",
        "Madhya Pradesh": "IN-MP",
        "Orissa": "IN-OR",
        "Tamil Nadu": "IN-TN",
        "Andaman and Nicobar": "IN-AN",
        "Andhra Pradesh": "IN-AP",
        "Tripura": "IN-TR",
        "Arunachal Pradesh": "IN-AR",
        "Karnataka": "IN-KA",
        "Punjab": "IN-PB",
        "Meghalaya": "IN-ML",
        "Manipur": "IN-MN",
        "Maharashtra": "IN-MH",
        "Kerala": "IN-KL"
      };
    
      const stateData = {};
    
    
    data?.forEach((state) => {
      const stateCode = stateCodeMap[state.loc];
      stateData[stateCode] = state.confirmedCasesIndian;
    });





const getdata = (key) => {
    return stateData[key];
  };
  


  const handleshow2 = (e, el, code) => {
    el.html(el.html() + ` <br> Statics: ${getdata(code)}`);
  };
  
  return (
    <div>
      <VectorMap
        map={"in_mill"}
        backgroundColor="transparent"
        focusOn={{
          x: 0.5,
          y: 0.5,
          scale: 0,
          animate: false,
        }}
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          height: "550px",
        }}
        onRegionClick={(e, countryCode) => console.log(countryCode)}
        onRegionTipShow={handleshow2}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#2938bc", 
          },
        }}
        regionsSelectable={false}
        series={{
            regions: [
              {
                values: stateData,
                scale: ["#C8EEFF", "#0071A4"], 
                normalizeFunction: "polynomial",
              },
            ],
          }}
      />
    </div>
  );
};

export default Map;
