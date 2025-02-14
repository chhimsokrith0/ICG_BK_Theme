import Image from "next/image"

const UserProfile = () => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md w-full hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
        <Image
          src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737554111/Personal_lpq7zb.gif"
          alt="User Icon"
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-col ml-3">
        <p className="text-gray-500 text-sm">Welcome</p>
        <p className="text-blue-600 text-lg font-bold">ssgighuy7y8sh</p>
      </div>
      <div className="flex items-center space-x-2 ml-auto">
        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm shadow">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737779933/Account_cdqdla.gif"
            alt="Normal Icon"
            width={32}
            height={32}
            className="mr-1"
          />
          <span className="text-gray-700 font-medium">Normal</span>
        </div>
        <div className="flex items-center bg-blue-500 px-3 py-1 rounded-full text-sm text-white shadow">
          <Image
            src="https://res.cloudinary.com/dfxqagrkk/image/upload/v1737722164/crown_cn0wt2.gif"
            alt="VIP Crown"
            width={32}
            height={32}
            className="mr-1"
          />
          <span className="font-medium">&gt;100</span>
        </div>
      </div>
    </div>
  )
}

export default UserProfile

