import RandomQuote from "./components/randomQuote"

export default async function Home() {
  const res = await fetch(
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
  )

  const quotes = await res.json()

  return (
    <div className="flex min-h-screen items-center justify-center bg-(--color-1)">
      <RandomQuote quotes={quotes} />
    </div>
  )
}
