"use client"
interface ButtonProps {
    label: string | React.ReactElement<any>,
    clickEvent: () => void
}
const Button = ({label, clickEvent}:ButtonProps) => {

  return (
    <button
          className={`px-6 py-3 mx-1 text-sm text-black bg-white rounded-xl font-semibold hover:bg-gray-800 hover:text-white `}
          onClick={clickEvent}
        >
          {label}
        </button>
  )
}

export default Button