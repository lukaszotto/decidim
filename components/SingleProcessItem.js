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
          <DateGridBody>
            <h5>Starts At</h5>
            <p>{startDate}</p>
          </DateGridBody>
          <DateGridBody>
            <h5>Ends At</h5>
            <p>{endDate}</p>
          </DateGridBody>
        </DateGrid>
        <CardBody>
          <Link href={`/process/${id}`}>
            <Button>details</Button>
          </Link>
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

const Button = styled.div`
  color: #fff;
  background-color: #12203d;
  border-color: #12203d;
  display: inline-block;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 9px 13px;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  cursor: pointer;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  grid-column-gap: 4%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`;

const DateGridBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  text-align: center;
  h5 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  border-bottom: inherit;
  text-align: center;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin: 0px;
`;

const CardText = styled.p``;
