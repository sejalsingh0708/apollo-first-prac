import React from 'react';
import Moment from "react-moment";
import {Link} from "react-router-dom";
import ClassNames from "classnames"
export default function LaunchItem({lauch:{ flight_number, mission_name, launch_date_local,             launch_success}}) {
    return (
        <div className="card card-body mb-3" >
            <div className="row">
                <div className="col-md-9">
                    <h5>Mission : <span className={ClassNames({
                                                "text-success": launch_success,
                                                "text-danger": !launch_success
                            })}>{mission_name}</span></h5>
                    <p>
                        Date: <Moment format ="DD-MM-YYYY HH:MM">{launch_date_local}</Moment>
                    </p>
                </div>
                <div className="col-md-3">
                    <Link  to ={`/launches/${flight_number}`}className="btn btn-secondary">Launch Details</Link>
                </div>
            </div>
        </div>
    )
}
