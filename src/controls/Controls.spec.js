import React from 'react';
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './Controls';

import Dashboard from '../dashboard/Dashboard'


test("there is a change in button inner text", () => {
    const controls = rtl.render(<Controls />)
    const gateBtn = controls.getByTestId("gate")
    const lockBtn = controls.getByTestId("lock")

    // testing gate button
    rtl.act(() => {
        rtl.fireEvent.click(gateBtn)
    })
    expect(gateBtn).toHaveTextContent("Open Gate")

    // testing lock button
    rtl.act(() => {
        rtl.fireEvent.click(lockBtn)
    })
    expect(lockBtn).toHaveTextContent("Unlock Gate")
})

// test("button disabled when not applicable", () => {
//     const controls = rtl.render(<Controls />)
//     const gateBtn = controls.getByTestId("gate")
//     const lockBtn = controls.getByTestId("lock")


//     expect(lockBtn).toHaveProperty('disabled', true)

//     rtl.act(() => {
//         rtl.fireEvent.click(gateBtn)
//     })

//     expect(lockBtn).toHaveProperty('disabled', false)
// })
