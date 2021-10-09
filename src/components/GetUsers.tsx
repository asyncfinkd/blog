import React, { useEffect, useState } from 'react';
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Queries";

const GetUsers: React.FC = () => {
    const {error, data, loading} = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        if (data !== undefined) {
            setUsers(data.getAllUsers);
        }
    }, [data]);
    return(
        <>
        {error && "data error"}
        {loading && "loading..."}
        {users?.map((item: any) => {
            return(
                <>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.married === true ? "married" : "not married"}</p>
                </>
            )
        })}
        </>
    )
};

export default GetUsers;