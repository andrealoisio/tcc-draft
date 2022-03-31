import React from 'react';
import { useParams } from "react-router-dom";

import DetalheConveniados from './DetalheConveniados';

function GetId() {

    const { id } = useParams();
    console.log(id);

    return (
        <div>
            <DetalheConveniados id={id} />
        </div>
    );
}

export default GetId;