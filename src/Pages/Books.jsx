import React from 'react'

export default function Books() {
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
            <div className="row">
                <div className="books__header">
                    <h2 className="section__title books__header--title">All Books</h2>
                    <select name="" id="filter">
                        <option value="" selected disabled>Sort</option>
                        <option value="LOW_TO_HIGHEST">Lowest Price</option>
                        <option value="HIGH_TO_LOW">Highest Price</option>
                        <option value="RATING">Rating</option>
                    </select>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}
