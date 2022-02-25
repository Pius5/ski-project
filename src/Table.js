import React from 'react';

function Table() {
    return (
        <div>
            <table border='1'>
                <tr>

                    <th>Venue</th>
                    <th>Price</th>
                    <th>Duration</th>


                </tr>
                <tr>
                    <td>Norway</td>
                    <td>$379.00</td>
                    <td>3 days</td>

                </tr>
                <tr>
                    <td>Sweden</td>
                    <td>$416.00</td>
                    <td>5 days</td>
                </tr>

            </table>
        </div>);
}

export default Table;