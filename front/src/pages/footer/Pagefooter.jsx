import React from 'react'
import './pagefooter.css'

export default function Pagefooter() {
  return (
    <footer>
        <div className="columns">
            <div className="column1">
                <p>column 1</p>
            </div>
            <div className="column2">
                <p>column 2</p>
            </div>
        </div>
        <div className="copyright">
            <p>&copy; Copyright 2023 <a href="groupkh.com">Group K Holdings LTD</a></p>
        </div>
    </footer>
  )
}

