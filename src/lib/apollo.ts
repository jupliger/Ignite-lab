import {ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
     uri: "https://api-sa-east-1.graphcms.com/v2/cl4omowdx0ecb01yw4z9h7tqr/master",
     cache: new InMemoryCache()

})