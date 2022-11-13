import React from "react";
import THead from "./Table/THead";
import TBody from "./Table/TBody";

const TABLE_CAPTION = `抗性表v${__APP_VERSION__}`

export default class Table extends React.Component {
  render(): React.ReactNode {
    return (
      <table className="min-w-max text-center">
        <caption
          className="font-serif relative font-black text-7xl py-5 pl-8">
          {TABLE_CAPTION}
        </caption>
        <THead />
        <TBody />
        <tfoot className="font-sans border-b-8 border-t-4">
          <tr>
            <td className="p-2" colSpan={13}>
              <p>
                * 来自【空萤酒馆】，初版由巴别塔夜空提供，由 whrily、小明明、羽川raid
                完善、修正，最后由 NGA 吾竟南宫遥保持更新。
              </p>
              <p>
                * 现版又经更新、重制、并会在 <strong>米游社</strong> 和
                <strong>NGA</strong> 一直保持更新。
              </p>
            </td>
          </tr>
        </tfoot>
      </table >
    )
  }
}


