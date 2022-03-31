import React from 'react';
import { useParams } from "react-router-dom";

export default function DetalheConveniados() {
  const { id } = useParams();
  return (
          <>
            <h1>Code Placeholder</h1>
            <h1>{id}</h1>
          </>
        );
      }
