import React from "react";
import "./education.css";
export const Education = () => {
  return (
    <>
      <div className="edu">
        <div className="sslc-st">
          <div>
            <img
              className="stgemmas"
              src="assets/images/st.gemmas.png"
              alt=""
            />
          </div>
          <div>
            <p className="SSLC"> SSLC </p>
            <p>
              2019-2020 <br /> ST.GEMMAS GHSS MALAPPURAM <br />
              Board Exam score:90%
            </p>
          </div>
        </div>
        <div className="high-msp">
          <div >
            <img className="msp" src="assets/images/msp.jpeg" alt="" />
          </div>
          <div>
            <p className="highschool"> High school </p>
            <p>
              2020-2022 <br /> MSP HSS MALAPPURAM <br />
              Board Exam score:93.3%
            </p>
          </div>
        </div>
        <div className="btech-cusat">
          <div>
            <img className="cusat" src="assets\images\cusat.jpeg" alt="" />
          </div>
          <div>
            <p className="btech"> Btech </p>
            <p>
              2023-2027 <br /> CUSAT Cochin <br />
              current semester CGPA:7.5
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
