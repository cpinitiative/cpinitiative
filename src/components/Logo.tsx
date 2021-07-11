export default function LogoSquare(): JSX.Element {
  return (
    <svg
      className={"inline-block"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
    >
      <g>
        <path
          className="fill-current text-[#6600af]"
          d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5m0-5a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
        />
      </g>
      <line
        className="stroke-current stroke-[7px] text-[#be5eff]"
        style={{ strokeMiterlimit: 10 }}
        x1="50"
        y1="27"
        x2="73.29"
        y2="65.64"
      />
      <line
        className="stroke-current stroke-[7px] text-[#be5eff]"
        style={{ strokeMiterlimit: 10 }}
        x1="50"
        y1="27"
        x2="26.71"
        y2="67"
      />
      <circle className="fill-current text-[#961be8]" cx="50" cy="27" r="10" />
      <circle
        className="fill-current text-[#961be8]"
        cx="26.71"
        cy="67"
        r="10"
      />
      <circle
        className="fill-current text-[#961be8]"
        cx="73.29"
        cy="67"
        r="10"
      />
    </svg>
  )
}
