import React from "react";
import { childNode } from "../interfaces/IchildNode";

const Responsive = (props: childNode): JSX.Element => {
    return (
        <div
            data-test="component-responsive"
            className="flex justify-center h-screen"
        >
            <div />
            <div
                style={{ width: "500px" }}
                className="card bordered self-center"
            >
                <div className="card-body">{props.children}</div>
            </div>
            <div />
        </div>
    );
};

export default Responsive;
