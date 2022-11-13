/// <reference types="vite/client" />

declare const __APP_VERSION__: string
declare const __LAST_UPDATE__: string

type Name = string
type Element = number | 'infinity'
declare type TDValue = Element | Name | null
declare type THKey = keyof TRowItem
declare interface TRowItem {
  race?: Name
  being?: Name
  state: Name | null
  correspond: Element | null
  electro: Element
  pyro: Element
  hydro: Element
  cryo: Element
  dendro: Element
  anemo: Element
  geo: Element
  physical: Element
}

