export default function Prizes() {
  return (
    <div className="flex flex-col mb-8">
      <p className="tracking-tight text-center font-xs text-purple-600 font-semibold uppercase">
        1st place in Div. 1 or 2
      </p>
      <h2 className="flex justify-center font-extrabold tracking-tight text-4xl mb-6">
        Prizes
      </h2>
      <div className="prose prose-lg block mx-auto">
        <span className="font-extrabold">Club Teams</span>
        <ul>
          <li>Win a pizza party for your club! Fully paid for by CPI.</li>
        </ul>

        <span className="font-extrabold">Individual</span>
        <ul>
          <li>$50 gift card</li>
        </ul>
      </div>
    </div>
  )
}
