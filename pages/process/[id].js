import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Loader from "../../components/Loader";

const Process = ({ id }) => {
  const { loading, error, data } = useQuery(GET_PROCESS, {
    variables: {
      id: id,
    },
  });
  if (loading) {
    return <Loader></Loader>;
  }
  if (error) {
    return <h2>Error while loading data...</h2>;
  }
  if (data) {
    return (
      <ContainerWrapper>
        {data.participatoryProcess && (
          <div>
            <TitleWrapper>
              <h1> {data.participatoryProcess.title.translation}</h1>
              <div>
                {data.participatoryProcess.steps.map((item, index) => {
                  return (
                    <Card>
                      <CardBody>
                        <Badge>
                          Phase{" "}
                          <BadgeLight>
                            {index + 1} of{" "}
                            {data.participatoryProcess.steps.length}
                          </BadgeLight>
                        </Badge>
                        <CardTitle>{item.title.translation}</CardTitle>
                        <CardText>
                          {item.startDate || "?"} - {item.endDate || "?"}
                        </CardText>
                      </CardBody>
                    </Card>
                  );
                })}
              </div>
            </TitleWrapper>
            {
              <p
                dangerouslySetInnerHTML={{
                  __html: data.participatoryProcess.description.translation,
                }}
              ></p>
            }
            <ListGroup>
              <ListGroupItem>
                <h4>Local Area</h4>
                {data.participatoryProcess.localArea.translation || "-"}
              </ListGroupItem>
              <ListGroupItem>
                <h4>Meta Scope</h4>
                {data.participatoryProcess.metaScope.translation || "-"}
              </ListGroupItem>
              <ListGroupItem>
                <h4>Participatory Scope</h4>
                {data.participatoryProcess.participatoryScope.translation ||
                  "-"}
              </ListGroupItem>
              <ListGroupItem>
                <h4>Participatory Structure</h4>
                {data.participatoryProcess.participatoryStructure.translation ||
                  "-"}
              </ListGroupItem>
              <ListGroupItem>
                <h4>Target</h4>
                {data.participatoryProcess.target.translation || "-"}
              </ListGroupItem>
            </ListGroup>
          </div>
        )}
      </ContainerWrapper>
    );
  }
};

export async function getServerSideProps({ params }) {
  return { props: { id: params.id } };
}

export default Process;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ececec;
  border-radius: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ListGroupItem = styled.div`
  position: relative;
  display: block;
  padding: 13px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  h4 {
    margin: 12px 0;
    font-weight: 500;
  }
  &:last-child {
    border-bottom: 0;
  }
`;

const ContainerWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 21px;
  min-height: 400px;
`;

const Badge = styled.div`
  color: #fff;
  display: inline-block;
  background-color: #12203d;
  border-color: #12203d;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 5px 9px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  margin-bottom: 5px;
`;

const BadgeLight = styled.div`
  display: inline-block;
  padding: 2px 4px;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border-radius: 2px;
  background-color: white;
  color: black;
`;

const Card = styled.div`
  position: relative;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin-bottom: 5px;
  min-width: 200px;
`;

const CardBody = styled.div`
  min-height: 1px;
  padding: 21px;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin: 0px;
`;

const CardText = styled.p``;

const GET_PROCESS = gql`
  query participatoryProcess($id: ID) {
    participatoryProcess(id: $id) {
      id
      scope {
        name {
          translation(locale: "en")
        }
      }
      localArea {
        translation(locale: "en")
      }
      metaScope {
        translation(locale: "en")
      }
      participatoryScope {
        translation(locale: "en")
      }
      participatoryStructure {
        translation(locale: "en")
      }
      target {
        translation(locale: "en")
      }
      steps {
        id
        title {
          translation(locale: "en")
        }
      }
      title {
        translation(locale: "en")
      }
      description {
        translation(locale: "en")
      }
    }
  }
`;
