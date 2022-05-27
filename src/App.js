import BarChart from "./charts/barchart";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import GraphLayout from "./layout/graph/graph";
import MainLayout from "./layout/layout";

function App() {
  const data = [
    {
      "id": 1,
      "day": "mon",
      "amount": 17.45
    },
    {

      "id": 2,
      "day": "tue",
      "amount": 34.91
    },
    {

      "id": 3,
      "day": "wed",
      "amount": 52.36
    },
    {

      "id": 4,
      "day": "thu",
      "amount": 31.07
    },
    {

      "id": 5,
      "day": "fri",
      "amount": 23.39
    },
    {

      "id": 6,
      "day": "sat",
      "amount": 43.28
    },
    {

      "id": 7,
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
