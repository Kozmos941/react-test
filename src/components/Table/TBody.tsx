import React from "react";
import { data, rowspan } from '../../assets/table.json'

const ROWS = data.map(item => new Map(Object.entries(item)))
const ROW_SPAN = new Map(Object.entries(rowspan))
const SIGN_REPLACE = [
  { pattern: /\*/, replace: '✱' },
  { pattern: /\n/, replace: '<br>' },
  { pattern: /\//, replace: '｜' },
  { pattern: /·/, replace: '・' },
  { pattern: /infinity/, replace: '∞' }, //♾️∞ထ８ꝏꝎ
]

export default class TBody extends React.Component {
  render(): React.ReactNode {
    return (
      <tbody className="font-sans font-thin text-2xl">
        {this.tRows(ROWS)}
      </tbody>
    )
  }
  tRows(rows: Map<string, any>[]) {
    return rows.map((map: Map<string, any>, index: number) => {
      return (
        <tr key={index} className="border-y-2">
          {map.get('race') &&
            <TCell _key={'race'} _value={map.get('race')} />
          }{map.get('being') &&
            <TCell _key={'being'} _value={map.get('being')} />
          }
          <TCell _key='state' _value={map.get('state')} />
          <TCell _key='correspond' _value={map.get('correspond')} />
          <TCell _key='pyro' _value={map.get('pyro')} />
          <TCell _key='hydro' _value={map.get('hydro')} />
          <TCell _key='anemo' _value={map.get('anemo')} />
          <TCell _key='electro' _value={map.get('electro')} />
          <TCell _key='dendro' _value={map.get('dendro')} />
          <TCell _key='cryo' _value={map.get('cryo')} />
          <TCell _key='geo' _value={map.get('geo')} />
          <TCell _key='physical' _value={map.get('physical')} />
        </tr >
      )
    })
  }
}


class TCell extends React.Component<{
  _key: string
  _value: TDValue
}> {
  render(): React.ReactNode {
    this.#initialize()
    return (
      <td
        rowSpan={this.#rowspan}
        className={this.#classList.join(' ')}
        dangerouslySetInnerHTML={{ __html: this.#value }}
      ></td>
    )
  }

  #value: string = ''
  #classList: string[] = ['py-1']
  #rowspan?: number

  #initialize = () => {
    const { _key: k, _value: v } = this.props
    switch (k) {
      case 'race':
        this.#classList.push('w-2', 'px-6', 'font-serif', 'font-semibold', 'text-3xl')
        break;
      case 'being':
      case 'state':
        this.#classList.push('font-medium')
        break;
      default:
        this.#classList.push('text-2xl', `text-${k}`)
    }

    switch (typeof v) {
      case 'number':
        this.#value = v + '%'
        if (v < 0) this.#classList.push('font-black')
        else if (v >= 75) this.#classList.push('font-extrabold', 'italic')
        else if (v >= 50) this.#classList.push('font-medium')
        else if (v >= 20) this.#classList.push('font-extralight')
        break
      case 'string':
        this.#value = v
        this.#rowspan = ROW_SPAN.get(v)
        SIGN_REPLACE.forEach(({ pattern, replace }) => {
          if (v.match(pattern))
            this.#value = this.#value.replace(pattern, replace)
        })
        if (v === 'infinity') this.#classList.push('font-black')
        break
    }
  }
}
