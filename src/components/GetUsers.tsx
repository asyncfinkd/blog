import React, { useEffect } from 'react';
import {useQuery, gql} from "@apollo/client";
import {LOAD_USERS} from "../graphql/Queries";

const GetUsers: React.FC = () => {
    const {error, data, loading} = useQuery(LOAD_USERS);
    useEffect(() => {
        console.log(data);
    }, [data])
    return(
        <>

        </>
    )
};

export default GetUsers;