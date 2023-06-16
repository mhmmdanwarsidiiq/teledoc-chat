import { UserAuth } from "../context/AuthContext"

const NavbarChat = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar fixed z-10 bg-primary text-primary-content">
      <div className="containerWrap flex justify-between">
        <img src="/src/assets/img/teledoc.png" alt="logo" style={{ height: "50px" }} />
        {currentUser ? <button onClick={handleLogout}>Logout</button> : ""}
      </div>
    </div>
  )
}

export default NavbarChat;