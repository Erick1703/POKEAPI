import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate,Link } from "react-router-dom";


function LoginPage() {

    const {register, handleSubmit, formState:{errors} } = useForm();
    const {signin, errors:signinErrors}= useAuth()
    const onSubmit = handleSubmit(data=>{
        signin(data)
    })
    return(
        <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full max-w-md">
        
          <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
               Login
              </h1>
              {
              signinErrors.map((errors, i)=>(
                <div className="bg-red-500 p-2 text-white font-bold" key={i}>
                  {errors}
                </div>
              ))
            }
              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
          
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="example@example.com"
                  />{errors.email && <p className="text-red-500">Email is required</p>}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", { required: true })}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="••••••••"
                  />{errors.password && <p className="text-red-500">Password is required</p>}
                </div>
  
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                 
                 <Link   to="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                 Register Here
                 </Link> 
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default LoginPage