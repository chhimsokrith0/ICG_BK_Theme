import { signIn } from "next-auth/react"
import { toast } from "react-toastify"

export const handleLogin = async (
  username: string,
  password: string,
  setErrorMessage: (message: string) => void,
  router: any,
) => {
  setErrorMessage("")

  const result = await signIn("credentials", {
    redirect: false,
    username,
    password,
  })

  if (result?.error) {
    setErrorMessage(result.error)
    toast.error("Invalid username or password. Please try again!", {
      position: "top-right",
    })
  } else {
    toast.success("Login successful! Redirecting...", {
      position: "top-right",
    })
    setTimeout(() => {
      router.push("/myaccount/deposit")
    }, 2000)
  }
}

