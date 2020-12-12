import React from "react";
import { useQuery, gql } from "@apollo/client";
import SingleProcessItem from "./SingleProcessItem";
import styled from "styled-components";
import Loader from "../components/Loader";

const Processes = () => {
  const { loading, error, data } = useQuery(GET_PROCESSES_LIST);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Latest processes</h1>
      {loading ? (
        <Loader />
      ) : (
        <ProessesWrap>
          {data &&
            data.participatoryProcesses.map((item) => {
              return (
                <SingleProcessItem
                  key={item.id}
                  item={item}
                ></SingleProcessItem>
              );
            })}
        </ProessesWrap>
      )}
    </div>
  );
};

export default Processes;

const ProessesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-column-gap: 50px;
  grid-row-gap: 10px;
`;

const GET_PROCESSES_LIST = gql`
  query getProcesses {
    participatoryProcesses {
      id
      title {
        translation(locale: "en")
      }
      subtitle {
        translation(locale: "en")
      }
      createdAt
      endDate
      startDate
      shortDescription {
        translation(locale: "en")
      }
    }
  }
`;
