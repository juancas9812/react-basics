const UserList = () => {
  const users = [
    {id: 1, name: 'Alice', age: 25},
    {id: 2, name: 'Bob', aeg: 30},
    {id: 3, name: 'Charlie', age: 22}
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}, age {user.age}
        </div>
      ))}
    </div>
  )
}

export default UserList;