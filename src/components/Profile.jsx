import {useState} from 'react'

const Profile = () => {
  const [profile, setProfile] = useState({name:"", age: ""});

  const handleChange = (e) => {
    setProfile({...profile, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input name="name" value={profile.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input name="age" value={profile.age} onChange={handleChange} />
        </label>
      </div>
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
      
    </div>
  )
}

export default Profile;