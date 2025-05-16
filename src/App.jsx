import Weather from "./components/Weather";
import UserStatus from "./components/UserStatus";
import Greeting from "./components/Greeting";

const App = () => {
  return (
    <div>
      <Weather temperature={12} />
      <UserStatus loggedIn={true} isAdmin={false} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <UserStatus loggedIn={false} isAdmin={true} />
      <Greeting timeOfDay="morning" />
      <Greeting timeOfDay="evening" />
    </div>
  )
}

export default App;