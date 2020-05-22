import React, {
    useState,
    useEffect
} from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const HELLO_QUERY = gql`
{
    hello
}
`

export const Home = () => {
    const [profile, setProfile] = useState({});
    const { loading, error, data, client } = useQuery(HELLO_QUERY);

    return (
        <div>
            <h1>cybear.tech</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}