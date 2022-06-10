export default function LoginForm({ onLogin }) {

  function handleSubmit(event) {
    event.preventDefault();

    onLogin(event.target.username.value, event.target.password.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>
        <div>
          <p>Username</p>
            <input type="text" name="username"/>
        </div>
        <div>
          <div>
            <p>Password</p>
            <input type="password" name="password"/>
          </div>
          <button>LOGIN</button>
        </div>
      </h1>
    </form>
    </>
  )

}