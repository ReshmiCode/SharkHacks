import React from 'react'

export default function Form() {
    return (
        <div className="form">
            <h1>Make a profile</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" />
                    </label>
                    <label>
                        <p>How long is your usual shower?</p>
                        <input usualTime="usualTime" />
                    </label>
                    <label>
                        <p>What is your gallons per minute value for your showerhead?</p>
                        <input gpm="gpm" />
                    </label>
                </fieldset>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}