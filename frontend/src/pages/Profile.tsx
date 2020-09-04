import React, { Fragment } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

interface UserProps {
  id: number;
}

const Profile: React.FC<UserProps> = ({ id }) => {
  const { data, error, loading } = useQuery(GET_USER, { variables: { id } });
  console.log(data);

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>NOT FOUND</p>;

  return (
    <Fragment>
      {data.User && (
        <h1>
          {data.User.id} {data.User.firstName} {data.User.lastName}{" "}
          {data.User.age}
        </h1>
      )}
    </Fragment>
  );
};

const GET_USER = gql`
  query User($id: Int!) {
    User(id: $id) {
      id
      firstName
      lastName
      age
    }
  }
`;

export default Profile;
export { GET_USER };
