import React from 'react'

export default function MissionColor() {
    return (
        <div className="my-3">
            <p>
                <span className="px-3 mr-2 bg-success"/> = Success Launches
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger"/> = Fail Launches
            </p>
        </div>
    )
}
