import React from "react";

export default class THead extends React.Component {
  render(): React.ReactNode {
    return (
      <thead className="font-serif font-black text-4xl border-t-8 border-b-4" >
        <tr className="">
          <THeadCell _key="race" _value="种族"></THeadCell>
          <THeadCell _key="being" _value="生物"></THeadCell>
          <THeadCell _key="state" _value="状态"></THeadCell>
          <THeadCell _key="correspond" _value="对应"></THeadCell>
          <THeadCell _key="pyro" _value="火"></THeadCell>
          <THeadCell _key="hydro" _value="水"></THeadCell>
          <THeadCell _key="anemo" _value="风"></THeadCell>
          <THeadCell _key="electro" _value="雷"></THeadCell>
          <THeadCell _key="dendro" _value="草"></THeadCell>
          <THeadCell _key="cryo" _value="冰"></THeadCell>
          <THeadCell _key="geo" _value="岩"></THeadCell>
          <THeadCell _key="physical" _value="物"></THeadCell>
        </tr>
      </thead >
    )
  }
}

class THeadCell extends React.Component<{
  _key: string
  _value: string
}> {
  render(): React.ReactNode {
    const { _key: k, _value: v } = this.props
    const classList = [`text-${k}`, 'py-2']
    return (
      <th className={classList.join(' ')}>
        {v}
      </th>
    )
  }
}
