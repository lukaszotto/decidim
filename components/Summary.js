import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";

const Summary = () => {
  const { loading, error, data } = useQuery(GET_SUMMARY);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Currently we have</h1>
      {!loading ? (
        <CountBoxContainer>
          {!error && (
            <>
              <CountBox>
                <h2>Processes</h2>
                <span>{data.participatoryProcesses.length}</span>
              </CountBox>
              <CountBox>
                <h2>Assemblies</h2>
                <span>{data.assemblies.length}</span>
              </CountBox>
              <CountBox>
                <h2>Conferences</h2>
                <span>{data.conferences.length}</span>
              </CountBox>
              <CountBox>
                <h2>Consultations</h2>
                <span>{data.consultations.length}</span>
              </CountBox>
              <CountBox>
                <h2>Initiatives</h2>
                <span>{data.initiatives.length}</span>
              </CountBox>
              <CountBox>
                <h2>Users</h2>
                <span>{data.users.length}</span>
              </CountBox>
            </>
          )}
        </CountBoxContainer>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default Summary;

const CountBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CountBox = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span {
    display: block;
    font-size: 50px;
  }
`;

const GET_SUMMARY = gql`
  query getSummary {
    participatoryProcesses {
      id
    }
    assemblies {
      id
    }
    conferences {
      id
    }
    consultations {
      id
    }
    initiatives {
      id
    }
    users {
      id
    }
  }
`;
