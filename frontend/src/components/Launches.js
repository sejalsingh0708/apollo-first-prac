import React, { Component ,Fragment} from 'react'
import {Query} from "react-apollo";
import gql from "graphql-tag"
import LaunchItem from "./LaunchItem";
import MissionColor from "./MissionColor";
import Spinner from "./Spinner";
const launches_query = gql`
    query LaunchesQuery {
        launches{
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`
export class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 style={{textAlign:"center"}}>Launches</h1>
                <MissionColor/>
                <Query query={launches_query}>
                        {
                            ({loading,error, data}) => {
                                    if(loading) return <Spinner/>
                                    if(error) console.log("this is err:", error);
                                    console.log("Here is my dataaa",data);
                                    return <div>
                                        {
                                            data.launches.map(launch => (
                                                <LaunchItem lauch={launch} key ={launch.flight_number}/>
                                            ))
                                        }
                                        </div>
                            }
                        }
                </Query>
            </Fragment>
        )
    }
}

export default Launches;

// import React, { Component ,Fragment} from 'react'
// import {Query} from "react-apollo";
// import gql from "graphql-tag"

// const launches_query = gql`
//     query LaunchesQuery {
//         launches{
//             flight_number
//             mission_name
//             launch_date_local
//         }
//     }
// `
// export class Launches extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <h1 className="display-4 my-3">Launches</h1>
//                 <Query query={launches_query}>
//                         {
//                             ({loading,error, data}) => {
//                                     if(loading) return <h2>Loading...........</h2>;
//                                     if(error) console.log("this is err:", error);
//                                     console.log("Here is my dataaa",data);
//                                     return <div>
//                                         {
//                                             data.launches.map((launch,i) => {
//                                                 return <li key={i}>{launch.flight_number} {". "}{launch.mission_name} => {new Date(launch.launch_date_local).toLocaleDateString()}</li>
//                                             })
//                                         }
//                                         </div>
//                             }
//                         }
//                 </Query>
//             </Fragment>
//         )
//     }
// }

// export default Launches;
