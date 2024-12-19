import Image from "next/image";
import { IconPigMoney, IconPaperclip, IconWallet, IconCurrencyDollarGuyanese } from "@tabler/icons-react"
import { BarChart, Card } from '@tremor/react'

const data = [
  {
    Weather: 'Sunny',
    Classmates: 10,
  },
  {
    Weather: 'Snowy',
    Classmates: 5,
  },
  {
    Weather: 'Cloudy',
    Classmates: 4,
  },
  {
    Weather: 'Rainy',
    Classmates: 2,
  },
  {
    Weather: 'Foggy',
    Classmates: 1,
  },
]
export default function Home() {
  return (
    <main className="md:p-4 p-2 text-black bg-white h-min overflow-hidden">
      <div className="md:ml-20 ml-6">
        <h1 className="font-bold md:text-5xl text-xl">Hi, Uttam Seervi</h1>
        <p className="font-medium text-neutral-500 text-[14px]">Here's what happening with your money, Lets Manage your Expense</p>
      </div>

      {/* AI suggestion box */}
      <div id="suggestionBox" className="p-6 mx-auto h-80  overflow-y-auto bg-[#FAF7F0] rounded-lg w-[90%] mt-5">
        <h1 className="font-bold text-2xl font-sans">Your Personal Money Mentor</h1>
        <p className="font-normal font-sans text-neutral-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem corrupti vitae perferendis perspiciatis omnis aliquid aspernatur deserunt, provident molestiae esse, excepturi rerum magni quod saepe ullam explicabo quia volupt  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit culpa fugiat nemo magni repellat repellendus expedita perspiciatis dicta iusto aut dolor, optio et at quas facere debitis? Nam ut quisquam delectus deleniti voluptatum velit enim perferendis vel eum deserunt aperiam optio sint incidunt, eos repellendus, a ipsa illo omnis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis distinctio rem impedit sapiente sunt voluptate quo, doloribus quam doloremque placeat, voluptatem excepturi voluptas odit optio. Facilis, debitis consequatur itaque deserunt, quo quae fuga incidunt adipisci voluptatum similique nemo expedita, magnam ut ea quaerat provident rem harum omnis neque corrupti libero. Doloribus distinctio molestiae, sit commodi voluptas numquam quo voluptatem dolorum delectus tenetur eos dol</p>
      </div>

      {/* budget grids */}
      <div id="budgetGrids" className="flex md:flex-wrap md:flex-row flex-col items-center justify-around gap-5 mt-8 w-[90%] mx-auto transition-all smooth ">
        <div className="md:w-60 w-full h-32 bg-[#FAF7F0] flex items-center justify-center gap-8 rounded-3xl">
          <div className="">
            <h3 className="font-semibold ">Total Budget</h3>
            <h1 className="font-extrabold text-2xl">$ 11.4k</h1>
          </div>
          <div className="bg-blue-800 p-2 rounded-[50%] w-12 h-12 flex items-center justify-center" >
            <IconPigMoney color="white" />
          </div>
        </div>
        {/*  */}
        <div className="md:w-60 w-full h-32 bg-[#FAF7F0] flex items-center justify-center gap-8 rounded-3xl">
          <div className="">
            <h3 className="font-semibold ">Total Spend</h3>
            <h1 className="font-extrabold text-2xl">$ 311</h1>
          </div>
          <div className="bg-blue-800 p-2 rounded-[50%] w-12 h-12 flex items-center justify-center" >
            <IconPaperclip color="white" />
          </div>
        </div>
        {/*  */}
        <div className="md:w-60 w-full h-32 bg-[#FAF7F0] flex items-center justify-center gap-8 rounded-3xl">
          <div className="">
            <h3 className="font-semibold ">No. Of Budgets</h3>
            <h1 className="font-extrabold text-2xl">5</h1>
          </div>
          <div className="bg-blue-800 p-2 rounded-[50%] w-12 h-12 flex items-center justify-center" >
            <IconWallet color="white" />
          </div>
        </div>
        {/*  */}
        <div className="md:w-60 w-full h-32 bg-[#FAF7F0] p-3 flex items-center justify-center gap-8 rounded-3xl">
          <div className="">
            <h3 className="font-semibold ">Sum of Income Streams</h3>
            <h1 className="font-extrabold text-2xl">$ 11.4k</h1>
          </div>
          <div className="bg-blue-800 p-2 rounded-[50%] w-12 h-12 flex items-center justify-center" >
            <IconCurrencyDollarGuyanese color="white" />
          </div>
        </div>
      </div>

      {/* activity */}
      <section className="mt-10 md:ml-20  flex flex-col md:flex gap-8">
        <div id="graph" className="md:w-[490px] md:h-[360px] bg-transparent rounded-[18px]">
          <Card className="bg-transparent text-white">
            <BarChart className="" data={data} index="Weather" categories={['Classmates']} />
          </Card>

        </div>




        <div id="latestBudgets">
          <h1 className="font-bold text-3xl font-sans hover:translate-x-3 transition mb-5">Latest Budgets</h1>
          <div className='w-[350px] rounded-lg bg-red-500 h-[200px] p-4 flex gap-9'>
            <div id="logo" className="bg-white w-12 h-12 rounded-[50%] flex items-center justify-center">
              <h1 className="text-2xl"> 👻</h1>
            </div>
            <h1>DOG FOOD</h1>
          </div>

        </div>
      </section>
    </main>
  );
}
