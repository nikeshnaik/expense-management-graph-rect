import BarChart from "./charts/barchart";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import GraphLayout from "./layout/graph/graph";
import MainLayout from "./layout/layout";

function App() {
  const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
  return (

    <>
      <Header balance={921.48} />
      <MainLayout>
        <GraphLayout graphTitle="Spending - Last 7 days">
          <BarChart data={data} />
        </GraphLayout>
        <Footer total_this_month={478.33} percent_change={"+2.4%"} />
      </MainLayout>

    </>
  )

}

export default App;
