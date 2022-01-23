import React from 'react';

type Props = React.PropsWithChildren<{
  expandable?: boolean
}>

const Card: React.FC<Props> = ( { expandable, children }: Props) => {
  return (<>
  </>);
}

export default Card;