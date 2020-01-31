import React from 'react'

export default function (props) {

  let {
    subTotal = 0,
    tips = 0,
  } = props

  return (
    <div className="options-l1">
      <div className="tips">
        <p>Tips for waiters</p>
        <div className="buttons"><button>ZERO</button><button>ROUND UP</button><button>10%</button><button>CUSTOM</button></div>
      </div>
      <div className="invoice">
        <table>
          <tr><td>Subtotal</td><td><span>&pound;</span>{parseFloat(subTotal).toFixed(2)}</td></tr>
          <tr><td>Tips</td><td><span>&pound;</span>{tips}</td></tr>
        </table>
        <table>
          <tr><td><b>Total</b></td><td><span>&pound;</span>{parseFloat(tips + subTotal).toFixed(2)}</td></tr>
        </table>
      </div>
      <button className="button">Confirm Payment</button>
    </div>
  )
}