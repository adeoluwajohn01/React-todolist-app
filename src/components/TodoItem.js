/**
 *
 * @param {{
 *  item: import('../App').Todo
 *  remove : () => void;
 *  toggle : () => void;
 * }} props
 */

const TodoItem = (props) => {
  const { item, remove, toggle } = props;

  const handleRemove = (e) => {
    e.stopPropagation();
    remove();
  };

  return (
    <li className={`items ${item.done && 'checked'}`} onClick={() => toggle()}>
      {item.content}

      <span className='icon'>
        <i class='fa-solid fa-trash ' onClick={handleRemove}></i>
      </span>
    </li>
  );
};

export default TodoItem;
