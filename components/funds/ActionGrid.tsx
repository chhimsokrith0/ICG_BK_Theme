import Image from "next/image"

const actions = [
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717089/Deposit_acvffy.gif",
    label: "Deposit",
  },
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717160/Transfer_wky3lw.gif",
    label: "Transfer",
  },
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717229/Withdraw_vvmcqc.gif",
    label: "Withdraw",
  },
  {
    icon: "https://res.cloudinary.com/dfxqagrkk/image/upload/v1737717289/History_hmkasy.gif",
    label: "History",
  },
]

const ActionGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white p-6 rounded-lg">
      {actions.map((action, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition-colors"
        >
          <Image src={action.icon || "/placeholder.svg"} alt={action.label} width={80} height={80} className="mb-2" />
          <p className="text-sm font-medium text-gray-700">{action.label}</p>
        </div>
      ))}
    </div>
  )
}

export default ActionGrid

