export interface IListItemsProps { 
  className?: string;
  items: any[];
  renderItem: (item: any, index?: number, array?: any[]) => JSX.Element;
}

const ListItems: React.FC<IListItemsProps> = (props) => {

  const { className, items, renderItem } = props;

  return (
    <div className={className} >
      {items.map(renderItem)}
    </div>
  )
}

export default ListItems;