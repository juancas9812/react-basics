const UserStatus = ({loggedIn, isAdmin}) => {
  if (loggedIn && isAdmin) {
    return <p>Welcome Admin!</p>
  }
  if (loggedIn) {
    return <p>Welcome User!</p>
  }
}

export default UserStatus;