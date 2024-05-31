import React from 'react'
import { SubscribeSec } from './subCompStyles'

const Subscribe = () => {
  return (
    <SubscribeSec>
        <div className="genLayout subscribeContainer">
            <h1>Subscribe to get latest update</h1>

            <div className="inputWrapper">
                <input type="email" placeholder='write your email address' />
                <button>submit</button>
            </div>
        </div>
    </SubscribeSec>
  )
}

export default Subscribe