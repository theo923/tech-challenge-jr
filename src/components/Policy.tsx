import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Iinfo } from "../interfaces/Iinfo";
import { useLocation } from "react-router-dom";
import { IaccessData } from "../interfaces/Iaccess";
import { Location } from "history";

const Policy = (): JSX.Element => {
    const result: Location<IaccessData> = useLocation();
    const data: IaccessData = result?.state;
    const [info, setInfo] = useState<Iinfo>();

    useEffect(() => {
        axios
            .get("https://api.bybits.co.uk/policys/details", {
                headers: {
                    environment: "mock",
                    Authorization: "Bearer " + data?.access_token,
                    "Content-type": "application/json",
                },
            })
            .then((data: AxiosResponse<Iinfo>) => {
                setInfo(data?.data);
            });
    }, [result, data?.access_token]);

    return (
        <div data-test="component-policy">
            <h1 className="card-title">My Policy</h1>
            <div className="divider category" />
            <div className="category">
                <h2>Policy reference:</h2>
                <p>{info?.policy?.policy_reference}</p>
            </div>
            <div className="category">
                <h2>Cover type:</h2>
                <p>{info?.policy?.cover}</p>
            </div>
            <div className="category">
                <h2>Car:</h2>
                <p>{`${info?.vehicle?.make} ${info?.vehicle?.model} ${info?.vehicle?.colour} -${info?.vehicle?.reg}`}</p>
            </div>
            <div className="category">
                <h2>Address:</h2>
                <p>{`${info?.policy?.address?.line_1}, ${info?.policy?.address?.line_2}, ${info?.policy?.address?.postcode}`}</p>
            </div>
        </div>
    );
};

export default Policy;
