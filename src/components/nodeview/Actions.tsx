import { Node, powerOnNode, powerOffNode } from '../../kraken-interactions/node'
import React from 'react'

interface ActionProps {
  cfgNode: Node
  dscNode: Node
  cfgUrlSingle: string
  dscUrlSingle: string
  graphToggle: () => void
}

export const Actions = (props: ActionProps) => {
  return (
    <div className={`actions-area`} style={{ display: props.cfgNode.parentId === undefined ? `none` : `` }}>
      <div
        className={`button green`}
        onClick={() => {
          powerOnNode(props.cfgNode, props.cfgUrlSingle)
        }}>
        Power On
      </div>
      <div
        className={`button red`}
        onClick={() => {
          powerOffNode(props.cfgNode, props.dscNode, props.cfgUrlSingle, props.dscUrlSingle)
        }}>
        Power Off
      </div>
      <div className={`button purple`} id={`graph-button`} onClick={props.graphToggle}>
        <svg xmlns='http://www.w3.org/2000/svg' width='100' height='38' viewBox='0 0 24 20'>
          <path fill='None' d='M0 0h24v24H0V0z' />
          <path
            fill='white'
            d='M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z'
          />
        </svg>
      </div>
    </div>
  )
}
