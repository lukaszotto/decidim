import React from "react";
import styled from "styled-components";
import Link from "next/link";

const SingleProcessItem = ({
  item: { id, title, shortDescription, endDate, startDate },
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{title?.translation}</CardTitle>
          <CardText
            className="text-overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: shortDescription?.translation,
            }}
          ></CardText>
        </CardBody>
        <DateGrid>
          <CardBody>
            <span>Starts At</span>
          </CardBody>
          <CardBody>
            <span>{startDate}</span>
          </CardBody>
        </DateGrid>
        <DateGrid>
          <CardBody>
            <span>Ends At</span>
          </CardBody>
          <CardBody>
            <span>{endDate}</span>
          </CardBody>
        </DateGrid>
        <CardBody>
          <Link href={`${id}`}>details</Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleProcessItem;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-column-gap: 4%;
`;
const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  border-bottom: inherit;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin: 0px;
`;

const CardText = styled.p``;
