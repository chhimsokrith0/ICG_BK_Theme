import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { LoginFormData } from "@/types/Logintypes"

interface LoginFormProps {
  formData: LoginFormData
  setFormData: React.Dispatch<React.SetStateAction<LoginFormData>>
  handleSubmit: (e: React.FormEvent) => void
  errorMessage: string
}

const LoginForm: React.FC<LoginFormProps> = ({ formData, setFormData, handleSubmit, errorMessage }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username <span className="text-red-500">*</span>
        </label>
        <Input
          type="text"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="w-full"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password <span className="text-red-500">*</span>
        </label>
        <Input
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full"
          placeholder="Enter your password"
        />
      </div>
      {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
      >
        Log in
      </Button>
    </form>
  )
}

export default LoginForm

