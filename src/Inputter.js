import React from 'react';

function Inputter() {
    return (
        <div>
            <form>
                <label for="inputter">Book your trip NOW!</label>
                <input type="text" id="inputter" placeholder="Enter a Venue" />
                <input type="submit" value="Book Now" />
                </form>
        </div>);
}

export default Inputter;
