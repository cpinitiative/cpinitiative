import Header from "../../Header"
import Layout from "../../Layout"

export default function LoadingPage() {
  return (
    <Layout>
      <Header />
      <div className="margin-top-nav" />
      <div className="pt-4 sm:pt-10 text-center sm:text-left px-10 mt-28">
        <h1
          className={"text-4xl font-bold tracking-tight leading-9 text-center"}
        >
          Loading...
        </h1>
      </div>
    </Layout>
  )
}
