export default function LoginForm({ onLogin }) {

  function handleSubmit(event) {
    event.preventDefault();

    onLogin(event.target.username.value, event.target.password.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="relative justify-center w-full h-full max-w-screen-xl px-5 py-3 ml-auto mr-auto text-center border-4 border-solid rounded-lg top-56 bg-emerald-200 border-emerald-500">
    <fieldset autoComplete="off" className="flex flex-col p-4">
      <label htmlFor="username" className="py-4 font-bold text-2xl">
            USER NAME
          </label>
          <input className="border border-2 border-emerald-200 placeholder-gray-300" id="username" placeholder="User Name" />
          <label htmlFor="password" className="py-4 font-bold text-2xl">
            PASSWORD
          </label>
          <input
            className="border border-2 border-emerald-200 placeholder-gray-300"
            placeholder="password"
            type="password"
            id="password"
          />
         <button className="py-4 mt-4 rounded p bg-emerald-500 font-bold">SIGN IN</button>
      </fieldset>
    </form>
    </>
  )

}