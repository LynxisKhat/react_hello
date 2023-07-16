function Item({ user, remove }){
    return (
      <li>
        {user.name} | {user.status} |
        <button onClick={() => remove(user.id)}>
          Remove
        </button>
      </li>
    )
  }

  export default Item