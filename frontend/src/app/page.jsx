import Image from "next/image";

export default function Home() {
  return (
    <main className="md:p-4 p-2 text-black bg-white h-screen">
      <div>
        <h1 className="font-bold md:text-5xl text-xl">Hi, Uttam Seervi</h1>
        <p className="font-medium text-neutral-500 text-[14px]">Here's what happening with your money, Lets Manage your Expense</p>
      </div>
      <div id="suggestionBox" className="p-6 mx-auto h-80  overflow-y-auto bg-[#FAF7F0] rounded-lg w-[90%] mt-5">
        <h1 className="font-bold text-2xl font-sans">Your Personal Money Mentor</h1>
        <p className="font-normal font-sans text-neutral-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non autem corrupti vitae perferendis perspiciatis omnis aliquid aspernatur deserunt, provident molestiae esse, excepturi rerum magni quod saepe ullam explicabo quia volupt  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit culpa fugiat nemo magni repellat repellendus expedita perspiciatis dicta iusto aut dolor, optio et at quas facere debitis? Nam ut quisquam delectus deleniti voluptatum velit enim perferendis vel eum deserunt aperiam optio sint incidunt, eos repellendus, a ipsa illo omnis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis distinctio rem impedit sapiente sunt voluptate quo, doloribus quam doloremque placeat, voluptatem excepturi voluptas odit optio. Facilis, debitis consequatur itaque deserunt, quo quae fuga incidunt adipisci voluptatum similique nemo expedita, magnam ut ea quaerat provident rem harum omnis neque corrupti libero. Doloribus distinctio molestiae, sit commodi voluptas numquam quo voluptatem dolorum delectus tenetur eos dol</p>
      </div>
      <div id="budgetGrids"></div>
    </main>
  );
}
